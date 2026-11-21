"""Genera imágenes de marca (navy + dorado) para equipo, servicios y blog.

Uso: python scripts/generate-placeholders.py
Las imágenes se guardan en public/images/{team,services,blog}.
"""
from pathlib import Path
import math
import random

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent / "public" / "images"
NAVY = (10, 31, 61)
NAVY2 = (20, 52, 96)
GOLD = (201, 166, 82)


def font(size: int, serif: bool = True):
    names = ["georgiab.ttf", "georgia.ttf", "timesbd.ttf"] if serif else ["segoeuib.ttf", "arialbd.ttf"]
    for n in names:
        try:
            return ImageFont.truetype(n, size)
        except OSError:
            continue
    return ImageFont.load_default()


def gradient(w: int, h: int, a=NAVY, b=NAVY2, seed=0) -> Image.Image:
    im = Image.new("RGB", (w, h))
    px = im.load()
    rnd = random.Random(seed)
    angle = rnd.uniform(0.3, 1.2)
    for y in range(h):
        for x in range(w):
            t = (x * math.cos(angle) + y * math.sin(angle)) / (w + h)
            px[x, y] = tuple(int(a[i] + (b[i] - a[i]) * t * 1.6) for i in range(3))
    return im


def scales(draw: ImageDraw.ImageDraw, cx: int, cy: int, s: float, color, width=3):
    draw.line([(cx, cy - 90 * s), (cx, cy + 90 * s)], fill=color, width=width)
    draw.line([(cx - 110 * s, cy - 60 * s), (cx + 110 * s, cy - 60 * s)], fill=color, width=width)
    draw.ellipse([cx - 10 * s, cy - 100 * s, cx + 10 * s, cy - 80 * s], outline=color, width=width)
    for side in (-1, 1):
        x = cx + side * 110 * s
        draw.line([(x, cy - 60 * s), (x - 35 * s, cy + 10 * s)], fill=color, width=width)
        draw.line([(x, cy - 60 * s), (x + 35 * s, cy + 10 * s)], fill=color, width=width)
        draw.arc([x - 40 * s, cy - 15 * s, x + 40 * s, cy + 35 * s], 0, 180, fill=color, width=width)
    draw.line([(cx - 50 * s, cy + 90 * s), (cx + 50 * s, cy + 90 * s)], fill=color, width=width + 2)


def wrap(text: str, f, max_w: int, draw) -> list[str]:
    words, lines, cur = text.split(), [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if draw.textlength(test, font=f) <= max_w:
            cur = test
        else:
            lines.append(cur)
            cur = w
    lines.append(cur)
    return lines


def team(slug: str, name: str, role: str, i: int):
    w, h = 600, 720
    im = gradient(w, h, seed=i)
    d = ImageDraw.Draw(im)
    glow = Image.new("RGB", (w, h), (0, 0, 0))
    ImageDraw.Draw(glow).ellipse([150, 150, 450, 450], fill=(60, 90, 140))
    im = Image.blend(im, glow.filter(ImageFilter.GaussianBlur(70)), 0.35)
    d = ImageDraw.Draw(im)
    d.ellipse([170, 150, 430, 410], outline=GOLD, width=4)
    initials = "".join(p[0] for p in name.split()[:2]).upper()
    d.text((300, 280), initials, font=font(120), fill=GOLD, anchor="mm")
    d.text((300, 500), name, font=font(40), fill=(240, 240, 245), anchor="mm")
    d.line([(250, 540), (350, 540)], fill=GOLD, width=2)
    d.text((300, 575), role, font=font(24, serif=False), fill=(190, 200, 215), anchor="mm")
    out = ROOT / "team" / f"{slug}.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, quality=88)


def cover(folder: str, slug: str, title: str, tag: str, i: int, size=(1200, 800)):
    """Portada sin texto (el título ya lo muestra la tarjeta): degradado + balanza centrada."""
    w, h = size
    im = gradient(w, h, seed=i + 10)
    glow = Image.new("RGB", (w, h), (0, 0, 0))
    ImageDraw.Draw(glow).ellipse([w // 2 - 260, h // 2 - 260, w // 2 + 260, h // 2 + 260], fill=(50, 80, 130))
    im = Image.blend(im, glow.filter(ImageFilter.GaussianBlur(90)), 0.35)
    d = ImageDraw.Draw(im)
    scales(d, w // 2, h // 2 + 10, 1.6, GOLD, width=4)
    rnd = random.Random(i)
    for _ in range(40):
        x, y = rnd.randint(0, w), rnd.randint(0, h)
        d.ellipse([x, y, x + 2, y + 2], fill=(90, 120, 170))
    out = ROOT / folder / f"{slug}.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, quality=86)


TEAM = [
    ("john-shaffer", "John Shaffer", "Socio Fundador"),
    ("maria-gonzalez", "María González", "Derecho de Familia"),
    ("robert-chen", "Robert Chen", "Derecho Corporativo"),
    ("sarah-williams", "Sarah Williams", "Litigio Penal"),
    ("david-miller", "David Miller", "Derecho Inmobiliario"),
    ("elena-rodriguez", "Elena Rodríguez", "Derecho Laboral"),
]
SERVICES = [
    ("civil", "Derecho Civil"), ("cooperativa", "Derecho Cooperativo"), ("familiar", "Derecho Familiar"),
    ("laboral", "Derecho Laboral"), ("mineria", "Derecho Minero"), ("penal", "Derecho Penal"),
]
BLOG = [
    ("corporate-compliance", "Compliance corporativo en 2025", "Corporativo"),
    ("data-protection", "Protección de datos personales", "Tecnología"),
    ("divorce-agreement", "Cómo negociar un acuerdo de divorcio", "Familia"),
    ("economic-crimes", "Delitos económicos: lo que debes saber", "Penal"),
    ("estate-planning", "Planificación patrimonial y herencias", "Sucesiones"),
    ("labor-reforms", "Nuevas reformas laborales", "Laboral"),
    ("lease-agreements", "Contratos de alquiler seguros", "Inmobiliario"),
    ("ma-guide", "Guía de fusiones y adquisiciones", "Corporativo"),
    ("real-estate-sale", "Compraventa de inmuebles sin riesgos", "Inmobiliario"),
    ("shared-custody", "Custodia compartida: claves legales", "Familia"),
    ("startup-legal", "Checklist legal para startups", "Emprendimiento"),
    ("wrongful-termination", "Despido injustificado: tus derechos", "Laboral"),
]

if __name__ == "__main__":
    for i, (slug, name, role) in enumerate(TEAM):
        team(slug, name, role, i)
    for i, (slug, title) in enumerate(SERVICES):
        cover("services", slug, title, "Área de práctica", i)
    for i, (slug, title, tag) in enumerate(BLOG):
        cover("blog", slug, title, tag, i + 20)
    print("ok", ROOT)
