"""
OG image üretici — 1200×630 PNG, marka kimliğine uygun.
Profile fotoğrafı + başlık + alt başlık + domain + gradient.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path

ROOT = Path(r"D:/0/SvelteKit-MustafaYilmazArt")
OUT = ROOT / "static" / "og-image.jpg"
PROFILE = ROOT / "static" / "profile.jpg"

W, H = 1200, 630

# Renkler
TEAL = (33, 146, 149)
TEAL_LIGHT = (42, 179, 182)
YELLOW = (225, 217, 72)
CHARCOAL = (13, 17, 23)
WHITE = (254, 253, 251)

# Canvas — koyu zemin + gradient
img = Image.new("RGB", (W, H), CHARCOAL)
draw = ImageDraw.Draw(img)

# Diagonal gradient overlay (teal → charcoal)
for i in range(H):
    ratio = i / H
    r = int(CHARCOAL[0] + (31 - CHARCOAL[0]) * (1 - ratio) * 0.6)
    g = int(CHARCOAL[1] + (51 - CHARCOAL[1]) * (1 - ratio) * 0.6)
    b = int(CHARCOAL[2] + (51 - CHARCOAL[2]) * (1 - ratio) * 0.6)
    draw.line([(0, i), (W, i)], fill=(r, g, b))

# Sol üst köşe glow (teal blob)
glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_layer)
glow_draw.ellipse([-200, -200, 600, 600], fill=(*TEAL, 50))
glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(80))
img.paste(glow_layer, (0, 0), glow_layer)

# Sağ alt blob (yellow)
glow2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glow2_draw = ImageDraw.Draw(glow2)
glow2_draw.ellipse([700, 350, 1300, 950], fill=(*YELLOW, 35))
glow2 = glow2.filter(ImageFilter.GaussianBlur(80))
img.paste(glow2, (0, 0), glow2)

# Profile fotoğrafı (sol orta)
if PROFILE.exists():
    profile = Image.open(PROFILE).convert("RGBA")
    profile = profile.resize((220, 220), Image.LANCZOS)
    # Yuvarlak maske
    mask = Image.new("L", (220, 220), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.ellipse([0, 0, 220, 220], fill=255)
    # Beyaz halka
    ring = Image.new("RGBA", (240, 240), (0, 0, 0, 0))
    rdraw = ImageDraw.Draw(ring)
    rdraw.ellipse([0, 0, 240, 240], fill=WHITE)
    img.paste(ring, (70, 195), ring)
    img.paste(profile, (80, 205), mask)

# Font yükle (Windows fontlar)
try:
    font_title = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 64)  # Bold serif
    font_role = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 28)
    font_domain = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 22)
    font_tag = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 20)
except Exception as e:
    print(f"Font yükleme hatası: {e}")
    font_title = ImageFont.load_default()
    font_role = ImageFont.load_default()
    font_domain = ImageFont.load_default()
    font_tag = ImageFont.load_default()

# Başlık
draw.text((340, 220), "Mustafa Yılmaz", font=font_title, fill=WHITE)

# Rol satırı
draw.text((342, 305), "Danışman · AI Engineer · Eğitmen · AI Artist", font=font_role, fill=TEAL_LIGHT)

# Slogan
draw.text((342, 360), "Destekliyorum, Kodluyorum, İnşa Ediyorum.", font=font_role, fill=(255, 255, 255, 200))

# Alt etiketler
tags = ["Klinik & AI", "BAHAR Sahası", "KEŞİF Akademi", "50+ Skill"]
x = 342
y = 440
for i, tag in enumerate(tags):
    bbox = draw.textbbox((x, y), tag, font=font_tag)
    pad = 14
    box_w = bbox[2] - bbox[0] + pad * 2
    box_h = bbox[3] - bbox[1] + 12
    # Tag pill
    tag_layer = Image.new("RGBA", (box_w, box_h), (0, 0, 0, 0))
    tdraw = ImageDraw.Draw(tag_layer)
    tdraw.rounded_rectangle([0, 0, box_w, box_h], radius=box_h // 2,
                            fill=(*TEAL, 50), outline=(*TEAL_LIGHT, 100), width=1)
    tdraw.text((pad, 6), tag, font=font_tag, fill=(255, 255, 255, 230))
    img.paste(tag_layer, (x, y), tag_layer)
    x += box_w + 10
    if x > W - 200:
        x = 342
        y += box_h + 10

# Alt sağ — domain
draw.text((W - 360, H - 60), "mustafayilmaz.art", font=font_domain, fill=YELLOW)

# Sol alt — vurgu çizgisi
draw.rectangle([60, H - 24, 200, H - 18], fill=YELLOW)

img.save(OUT, "JPEG", quality=92, optimize=True)
print(f"Üretildi: {OUT} — {OUT.stat().st_size // 1024} KB, {W}×{H}")
