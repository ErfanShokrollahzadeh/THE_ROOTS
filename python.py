#!/usr/bin/env python3
"""
Generate QR code images for the The Roots site URL.

Usage:
  python3 python.py                # uses default URL
  python3 python.py <custom_url>   # override URL

Outputs:
  images/qr-the-roots.png
  images/qr-the-roots.svg
"""
from __future__ import annotations

from pathlib import Path
import sys


DEFAULT_URL = "https://the-roots.vercel.app/index.html"


def ensure_deps():
    try:
        import qrcode  # type: ignore
        from qrcode.image.svg import SvgImage  # type: ignore
        return qrcode, SvgImage
    except Exception as exc:  # pragma: no cover
        print(
            "Missing dependency. Install with: pip install qrcode[pil]",
            file=sys.stderr,
        )
        raise


def main() -> None:
    qrcode, SvgImage = ensure_deps()

    url = DEFAULT_URL
    if len(sys.argv) > 1 and sys.argv[1].strip():
        url = sys.argv[1].strip()

    project_root = Path(__file__).resolve().parent
    out_dir = project_root / "images"
    out_dir.mkdir(parents=True, exist_ok=True)

    png_path = out_dir / "qr-the-roots.png"
    svg_path = out_dir / "qr-the-roots.svg"

    # Build a robust QR code (good for printing and scanning)
    qr = qrcode.QRCode(
        version=None,  # auto size
        error_correction=qrcode.constants.ERROR_CORRECT_Q,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    # PNG (raster)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(png_path)

    # SVG (vector)
    svg_img = qrcode.make(url, image_factory=SvgImage)
    svg_img.save(svg_path)

    print("QR codes generated:")
    print(f"- {png_path}")
    print(f"- {svg_path}")


if __name__ == "__main__":
    main()
