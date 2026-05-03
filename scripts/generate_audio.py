"""
Gemini TTS — kalan 4 blog yazısı için Türkçe seslendirme.
posts.ts'ten içeriği parse eder, eksik audio'lu post'lar için MP3 üretir.
"""
import json, base64, struct, re, urllib.request, urllib.error, os, subprocess, sys, time
from pathlib import Path

API_KEYS = [
    "AIzaSyAQoZ7f3_aUilG-HqmoToB3EyL9AkDnYyU",
    "AIzaSyBfiyp0-u7cRlq5Aoj09-Uh5a68fe0oKF4",
    "AIzaSyDGRXnYw0SrpkxyD8VHoV5Ycb1e9faICjg",
    "AIzaSyBbMTKfR-YT-ryLSvQ9LPuoF0GlDjo7ra8",
    "AIzaSyAcH4GGpHs7XIcEuVqDtmAj3FJcz1ICQso",
    "AIzaSyBd3A1Db0WDzwDa-FA3K22D0O3kQHTMlUI",
]
ROOT = Path(r"D:/0/SvelteKit-MustafaYilmazArt")
OUT_DIR = ROOT / "static" / "audio"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Hangi slug'lar için audio üretmemiz gerekiyor (eksik olanlar)
TARGETS = [
    "ai-caginda-niyet-mimarisi",
    "bagimliligi-anlamak",
    "vibe-coding-ai-cagi",
    "icsel-sessizligin-sesi",
]

# posts.ts'ten içeriği çek
posts_ts = (ROOT / "src/lib/data/posts.ts").read_text(encoding="utf-8")

def extract_post(slug):
    # slug satırını bul ve sonraki content alanına kadar ilerle
    pattern = re.compile(
        r'\{[^{}]*?slug:\s*"' + re.escape(slug) + r'"(?:[^{}]|"(?:\\.|[^"\\])*")*?content:\s*`([^`]+)`',
        re.DOTALL
    )
    m = pattern.search(posts_ts)
    if not m:
        return None
    return m.group(1)

def html_to_text(html):
    t = re.sub(r'<[^>]+>', ' ', html)
    for src, dst in [('&apos;', "'"), ('&quot;', '"'), ('&amp;', '&'),
                     ('&ldquo;', '"'), ('&rdquo;', '"'), ('&mdash;', '—'),
                     ('&nbsp;', ' '), ('&#39;', "'")]:
        t = t.replace(src, dst)
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def split_chunks(t, max_len=3800):
    chunks = []
    while len(t) > max_len:
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

def gemini_tts(prompt_text):
    req_data = json.dumps({
        "contents": [{"parts": [{"text": prompt_text}]}],
        "generationConfig": {
            "responseModalities": ["AUDIO"],
            "speechConfig": {
                "voiceConfig": {"prebuiltVoiceConfig": {"voiceName": "Algenib"}}
            }
        },
        "model": "models/gemini-2.5-flash-preview-tts"
    }).encode("utf-8")

    last_err = None
    for key in API_KEYS:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key={key}"
        try:
            req = urllib.request.Request(url, data=req_data, headers={"Content-Type": "application/json"})
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.loads(resp.read().decode())
            audio_b64 = data["candidates"][0]["content"]["parts"][0]["inlineData"]["data"]
            return base64.b64decode(audio_b64)
        except urllib.error.HTTPError as e:
            body = e.read().decode("utf-8", errors="ignore") if hasattr(e, "read") else ""
            last_err = f"HTTP {e.code}: {body[:200]}"
            print(f"  [{key[-6:]}] {last_err}")
            if e.code == 429 or e.code == 403:
                continue
            else:
                raise RuntimeError(last_err)
        except Exception as e:
            last_err = str(e)
            print(f"  [{key[-6:]}] {last_err}")
            continue
    raise RuntimeError(f"Tüm key'ler tükendi: {last_err}")

def pcm_to_wav(pcm_bytes, out_path, sr=24000):
    n = len(pcm_bytes)
    with open(out_path, "wb") as f:
        f.write(b"RIFF")
        f.write(struct.pack("<I", 36 + n))
        f.write(b"WAVEfmt ")
        f.write(struct.pack("<IHHIIHH", 16, 1, 1, sr, sr*2, 2, 16))
        f.write(b"data")
        f.write(struct.pack("<I", n))
        f.write(pcm_bytes)

def wav_to_mp3(wav_path, mp3_path):
    subprocess.run(
        ["ffmpeg", "-y", "-i", str(wav_path), "-codec:a", "libmp3lame",
         "-b:a", "64k", "-ar", "24000", "-ac", "1", str(mp3_path)],
        capture_output=True, check=True
    )

# Ana akış
for slug in TARGETS:
    out_mp3 = OUT_DIR / f"{slug}.mp3"
    if out_mp3.exists():
        print(f"[skip] {slug} — already exists")
        continue

    html = extract_post(slug)
    if not html:
        print(f"[hata] {slug} — posts.ts'te bulunamadı")
        continue

    text = html_to_text(html)
    chunks = split_chunks(text)
    print(f"\n[{slug}] {len(text)} karakter -> {len(chunks)} parça")

    all_pcm = b""
    for i, chunk in enumerate(chunks):
        prompt = (
            "Aşağıdaki metni Türkçe, sakin, derin ve duraklamalı bir erkek sesiyle, "
            "sanki bir podcast'te dinleniyormuş gibi seslendiriniz:\n\n" + chunk
        )
        print(f"  parça {i+1}/{len(chunks)} ({len(chunk)} karakter)...")
        try:
            pcm = gemini_tts(prompt)
            all_pcm += pcm
            print(f"    +{len(pcm)} bayt PCM")
            time.sleep(2)  # rate limit nezaketi
        except Exception as e:
            print(f"    HATA: {e}")
            sys.exit(1)

    wav_path = OUT_DIR / f"{slug}.wav"
    pcm_to_wav(all_pcm, wav_path)
    wav_to_mp3(wav_path, out_mp3)
    wav_path.unlink()
    print(f"[ok] {out_mp3}")

print("\nTüm üretim tamam.")
