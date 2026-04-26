"""Gemini TTS chunked — uzun yazıları parçalara bölüp üretir, sonra ffmpeg ile birleştirir."""
import json, base64, struct, sys, re, urllib.request, os, subprocess, tempfile

API_KEYS = [
    "AIzaSyAQoZ7f3_aUilG-HqmoToB3EyL9AkDnYyU",
    "AIzaSyBfiyp0-u7cRlq5Aoj09-Uh5a68fe0oKF4",
    "AIzaSyDGRXnYw0SrpkxyD8VHoV5Ycb1e9faICjg",
    "AIzaSyBbMTKfR-YT-ryLSvQ9LPuoF0GlDjo7ra8",
    "AIzaSyAcH4GGpHs7XIcEuVqDtmAj3FJcz1ICQso",
    "AIzaSyBd3A1Db0WDzwDa-FA3K22D0O3kQHTMlUI",
]
SLUG = sys.argv[1]
TITLE = sys.argv[2]
TEXT = sys.stdin.read()
OUT_DIR = "D:/0/NextJS-MustafaYilmazArt/public/audio"

# HTML temizle
text = re.sub(r'<[^>]+>', ' ', TEXT)
text = re.sub(r'&apos;', "'", text)
text = re.sub(r'&quot;', '"', text)
text = re.sub(r'&amp;', '&', text)
text = re.sub(r'&ldquo;', '"', text)
text = re.sub(r'&rdquo;', '"', text)
text = re.sub(r'\s+', ' ', text).strip()

# 4000 karakterlik parçalara böl (cümle sonlarına dikkat ederek)
def split_chunks(t, max_len=4000):
    chunks = []
    while len(t) > max_len:
        # Son nokta/iki nokta'yı bul
        cut = max(t.rfind('. ', 0, max_len), t.rfind('? ', 0, max_len), t.rfind('! ', 0, max_len))
        if cut == -1:
            cut = t.rfind(' ', 0, max_len)
        if cut == -1:
            cut = max_len
        chunks.append(t[:cut+1].strip())
        t = t[cut+1:].strip()
    if t:
        chunks.append(t)
    return chunks

chunks = split_chunks(text)
print(f"[{SLUG}] {len(text)} char -> {len(chunks)} chunk")

def gemini_tts(prompt_text):
    req_data = json.dumps({
        "contents": [{"parts": [{"text": prompt_text}]}],
        "generationConfig": {
            "responseModalities": ["AUDIO"],
            "speechConfig": {
                "voiceConfig": {"prebuiltVoiceConfig": {"voiceName": "Algenib"}}
            }
        }
    }).encode()
    last_err = None
    for key in API_KEYS:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key={key}"
        req = urllib.request.Request(url, data=req_data, headers={"Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=300) as resp:
                d = json.loads(resp.read())
            parts = d.get("candidates", [{}])[0].get("content", {}).get("parts", [])
            for p in parts:
                if "inlineData" in p:
                    return base64.b64decode(p["inlineData"]["data"])
            last_err = f"NO AUDIO: {json.dumps(d)[:200]}"
        except Exception as e:
            last_err = f"key {key[:12]}: {e}"
            continue
    raise RuntimeError(f"All keys failed. Last: {last_err}")

def pcm_to_wav(pcm, path):
    sample_rate = 24000
    bits = 16
    byte_rate = sample_rate * bits // 8
    block_align = bits // 8
    data_size = len(pcm)
    wav = b'RIFF' + struct.pack('<I', 36 + data_size) + b'WAVE'
    wav += b'fmt ' + struct.pack('<IHHIIHH', 16, 1, 1, sample_rate, byte_rate, block_align, bits)
    wav += b'data' + struct.pack('<I', data_size) + pcm
    with open(path, 'wb') as f:
        f.write(wav)

# Tüm chunk PCM'lerini topla, tek WAV yap (ffmpeg concat sorununu atla)
tmpdir = tempfile.mkdtemp(prefix="tts_")
all_pcm = b""
total_pcm_size = 0
for i, chunk in enumerate(chunks):
    intro = f"Türkçe blog yazısı, sıcak ve sakin bir erkek sesiyle. {('Başlık: ' + TITLE + '. ') if i == 0 else ''}"
    prompt = intro + chunk
    try:
        pcm = gemini_tts(prompt)
        all_pcm += pcm
        duration = len(pcm) / 24000 / 2
        total_pcm_size += len(pcm)
        print(f"  chunk {i+1}/{len(chunks)}: {duration:.0f} sn")
    except Exception as e:
        print(f"  chunk {i+1} FAIL: {e}")
        sys.exit(1)

# Tek WAV oluştur (PCM concat — header bir kere)
combined_wav = os.path.join(tmpdir, "combined.wav")
pcm_to_wav(all_pcm, combined_wav)

mp3_out = os.path.normpath(os.path.join(OUT_DIR, f"{SLUG}.mp3"))
if os.path.exists(mp3_out):
    try: os.remove(mp3_out)
    except: pass
cmd = ["ffmpeg", "-y", "-i", combined_wav,
       "-codec:a", "libmp3lame", "-b:a", "64k", mp3_out]
res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode != 0:
    print("FFMPEG ERR:", res.stderr[-500:])
    sys.exit(1)
try: os.remove(combined_wav)
except: pass
wav_paths = []  # cleanup boş

# Süreyi PCM toplam boyutundan hesapla (24kHz, 16-bit mono = 48000 byte/sn)
total_sec = total_pcm_size / 48000
mm = int(total_sec // 60)
ss = int(total_sec % 60)

# Cleanup
for w in wav_paths:
    try: os.remove(w)
    except: pass
try: os.remove(concat_list)
except: pass
try: os.rmdir(tmpdir)
except: pass

print(f"OK: {SLUG}.mp3 ({os.path.getsize(mp3_out)/1024:.0f} KB, {mm} dk {ss} sn)")
print(f"DURATION: {mm} dk {ss} sn")
