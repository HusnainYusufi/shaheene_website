"""Resize the driver-app store screenshots (demo data) into WebP for the site."""
import sys
from pathlib import Path
from PIL import Image

src, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
for lang in ("en", "ar"):
    for name in ("02-dashboard", "03-in-transit", "05-otp", "06-delivered", "07-scan-claim"):
        im = Image.open(src / f"phone-{lang}" / f"{name}.png").convert("RGB")
        im = im.resize((720, round(im.height * 720 / im.width)), Image.LANCZOS)
        im.save(out / f"{name}-{lang}.webp", "WEBP", quality=82, method=6)

# Logo: trim the transparent padding so it can be used as a CSS mask in any colour.
logo = Image.open(sys.argv[3]).convert("RGBA")
logo.crop(logo.getbbox()).save(out.parent / "logo-mark.png", optimize=True)
