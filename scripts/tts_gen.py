"""Gemini TTS ile blog yazısını Türkçe erkek sesiyle WAV'a çevirir."""
import json, base64, struct, sys, re, urllib.request

API_KEY = "AIzaSyAQoZ7f3_aUilG-HqmoToB3EyL9AkDnYyU"
SLUG = sys.argv[1]
TITLE = sys.argv[2]
TEXT = sys.stdin.read()

# HTML etiketlerini temizle
text = re.sub(r'<[^>]+>', ' ', TEXT)
text = re.sub(r'\s+', ' ', text).strip()
if len(text) > 4500:
    text = text[:4500] + "..."

prompt = (
    f"Türkçe blog yazısını sıcak, sakin ve bilge bir erkek sesiyle seslendir. "
    f"Başlık: {TITLE}.\n\n{text}"
)

req_data = json.dumps({
    "contents": [{"parts": [{"text": prompt}]}],
    "generationConfig": {
        "responseModalities": ["AUDIO"],
        "speechConfig": {
            "voiceConfig": {"prebuiltVoiceConfig": {"voiceName": "Algenib"}}
        }
    }
}).encode()

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key={API_KEY}"
req = urllib.request.Request(url, data=req_data, headers={"Content-Type": "application/json"})
try:
    with urllib.request.urlopen(req, timeout=300) as resp:
        d = json.loads(resp.read())
except Exception as e:
    print(f"HTTP HATA: {e}")
    sys.exit(1)

parts = d.get("candidates", [{}])[0].get("content", {}).get("parts", [])
for p in parts:
    if "inlineData" in p:
        pcm = base64.b64decode(p["inlineData"]["data"])
        sample_rate = 24000
        num_channels = 1
        bits_per_sample = 16
        byte_rate = sample_rate * num_channels * bits_per_sample // 8
        block_align = num_channels * bits_per_sample // 8
        data_size = len(pcm)
        wav = b'RIFF' + struct.pack('<I', 36 + data_size) + b'WAVE'
        wav += b'fmt ' + struct.pack('<IHHIIHH', 16, 1, num_channels, sample_rate, byte_rate, block_align, bits_per_sample)
        wav += b'data' + struct.pack('<I', data_size) + pcm
        out = f"D:/0/NextJS-MustafaYilmazArt/public/audio/{SLUG}.wav"
        with open(out, 'wb') as f:
            f.write(wav)
        duration = data_size / sample_rate / 2
        print(f"OK: {SLUG}.wav ({len(wav)/1024:.0f} KB, {duration:.0f} sn)")
        sys.exit(0)

print("NO AUDIO IN RESPONSE")
print(json.dumps(d, indent=2)[:500])
sys.exit(1)
