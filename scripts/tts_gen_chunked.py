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

# Her chunk için ayrı ses üret
tmpdir = tempfile.mkdtemp(prefix="tts_")
wav_paths = []
for i, chunk in enumerate(chunks):
    intro = f"Türkçe blog yazısı, sıcak ve sakin bir erkek sesiyle. {('Başlık: ' + TITLE + '. ') if i == 0 else ''}"
    prompt = intro + chunk
    try:
        pcm = gemini_tts(prompt)
        wav_path = os.path.join(tmpdir, f"chunk_{i:02d}.wav")
        pcm_to_wav(pcm, wav_path)
        wav_paths.append(wav_path)
        duration = len(pcm) / 24000 / 2
        print(f"  chunk {i+1}/{len(chunks)}: {duration:.0f} sn")
    except Exception as e:
        print(f"  chunk {i+1} FAIL: {e}")
        sys.exit(1)

# ffmpeg ile birleştir
concat_list = os.path.join(tmpdir, "list.txt")
with open(concat_list, 'w') as f:
    for w in wav_paths:
        f.write(f"file '{w}'\n")

mp3_out = os.path.join(OUT_DIR, f"{SLUG}.mp3")
cmd = ["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", concat_list,
       "-codec:a", "libmp3lame", "-b:a", "64k", mp3_out]
subprocess.run(cmd, check=True, capture_output=True)

# Toplam süreyi al
result = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                        "-of", "default=noprint_wrappers=1:nokey=1", mp3_out],
                       capture_output=True, text=True)
total_sec = float(result.stdout.strip())
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
