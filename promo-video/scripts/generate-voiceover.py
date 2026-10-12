"""Generate the per-scene voiceover with Kokoro (open-source TTS, runs locally).

Setup:
  pip install kokoro-onnx soundfile
  curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.int8.onnx
  curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin

Run from the promo-video folder:
  python scripts/generate-voiceover.py --models <folder with the two files above>

Writes public/voiceover/<scene>.mp3 and src/voiceover.json (durations in seconds).
"""

import argparse
import json
import subprocess
from pathlib import Path

import soundfile as sf
from kokoro_onnx import Kokoro

VOICE = "am_michael"
SPEED = 1.0

SCRIPT = {
    "intro": "Still running your business on notebooks and spreadsheets?",
    "hero": "A R Digital Solutions builds digital systems around your business, right here in Cebu.",
    "services": "Fast, professional websites. Point of sale systems. And custom software for booking, management, and automation.",
    "sellix": "Like Sellix P O S, our own system for sales, inventory, expenses, and reports. It even works offline.",
    "projects": "From A R product experiences to business dashboards, every project is built to be used.",
    "industries": "Retail stores, cafés, laundry shops, salons, and rentals. Real businesses, ready to go digital.",
    "process": "We understand how you work, plan the right solution, build it with you, and support you after launch.",
    "outro": "Have a process that could work better? Let's talk. A R Digital Solutions.",
}

parser = argparse.ArgumentParser()
parser.add_argument("--models", default=".")
args = parser.parse_args()
models = Path(args.models)

root = Path(__file__).resolve().parent.parent
out_dir = root / "public" / "voiceover"
out_dir.mkdir(parents=True, exist_ok=True)

kokoro = Kokoro(str(models / "kokoro-v1.0.int8.onnx"), str(models / "voices-v1.0.bin"))
durations = {}
for scene, text in SCRIPT.items():
    samples, rate = kokoro.create(text, voice=VOICE, speed=SPEED, lang="en-us")
    wav = out_dir / f"{scene}.wav"
    sf.write(wav, samples, rate)
    mp3 = out_dir / f"{scene}.mp3"
    subprocess.run(
        ["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav), "-b:a", "192k", str(mp3)],
        check=True,
    )
    wav.unlink()
    durations[scene] = round(len(samples) / rate, 3)
    print(f"{scene}: {durations[scene]}s")

(root / "src" / "voiceover.json").write_text(json.dumps(durations, indent=2) + "\n")
