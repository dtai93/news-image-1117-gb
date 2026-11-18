#!/usr/bin/env python3
"""Quantize build/raw.png to a palette PNG and write entry.png."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "build" / "raw.png"
OUT = ROOT / "entry.png"
LIMIT = 1_000_000

raw = Image.open(RAW).convert("RGB")
if raw.size != (1024, 1024):
    raise SystemExit(f"raw size {raw.size}, expected 1024x1024")

# Adaptive palette, no dither: flat paper and cards stay flat.
q = raw.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
if q.mode != "P" or q.size != (1024, 1024):
    raise SystemExit(f"bad quantize {q.mode} {q.size}")

q.save(OUT, format="PNG", optimize=True)
size = OUT.stat().st_size
if size >= LIMIT:
    raise SystemExit(f"entry.png is {size} bytes, limit {LIMIT}")

print(f"wrote entry.png 1024x1024 {size} bytes")
