"""Convert portal and tracking-page screenshots (demo data) into WebP for the site.

Usage: python3 scripts/site-shots.py <dir with PNGs> public/img/shots
Portal shots are 16:10 desktop captures; tracking-mobile-{en,ar} are phone captures.
"""
import sys
from pathlib import Path
from PIL import Image

src, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)

BROWSER = ("portal-orders", "portal-order-detail", "portal-dashboard", "portal-naqel", "portal-drivers")
PHONE = ("tracking-mobile-en", "tracking-mobile-ar")


def save(im, name):
    im.convert("RGB").save(out / f"{name}.webp", "WEBP", quality=84, method=6)
    print(name, im.size)


for name in BROWSER:
    p = src / f"{name}.png"
    if not p.exists():
        print("missing", p.name)
        continue
    im = Image.open(p)
    # Crop to 16:10 from the top so the frame never letterboxes.
    h = round(im.width * 10 / 16)
    save(im.crop((0, 0, im.width, min(h, im.height))).resize((1600, 1000), Image.LANCZOS), name)

for name in PHONE:
    p = src / f"{name}.png"
    if not p.exists():
        print("missing", p.name)
        continue
    im = Image.open(p)
    save(im.resize((720, round(im.height * 720 / im.width)), Image.LANCZOS), name)
