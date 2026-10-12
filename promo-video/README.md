# AR Digital Solutions promo video

A 60-second 1080p marketing video for the AR Digital Solutions site, built with [Remotion](https://remotion.dev). Every page shown is the real site, captured from a production build. It has eight scenes (hook, hero, services, Sellix POS, projects, industries, process, call to action), a narrated voiceover and an original background track that ducks under the voice.

## Commands

```bash
npm i
npm run dev                                                   # Remotion Studio preview
npx remotion render ArdPromo out/ar-digital-solutions-promo.mp4
```

Each scene is also its own composition (under `ArdPromo-Scenes` in the Studio). Camera moves and cursor paths are keyframes in `src/scenes/*.tsx`, in the screenshot's CSS pixels (1600×1000).

If Remotion can't download its headless Chrome, point it at a local one with `--browser-executable=<path to chrome or headless_shell>`.

## Recapturing the site

`public/screens/*.jpg` come from the real site. `capture/capture.mjs` serves a production build, opens it in headless Chromium at 1600×1000 (2× pixel density), scrolls to each homepage section, waits for its reveal animation, and hovers a project card for the colour state.

```bash
# from the repo root
npx vite build --outDir /tmp/ard-site

# from promo-video/
node capture/capture.mjs /tmp/ard-site /tmp/ard-shots
```

Set `CHROMIUM_PATH` if Chromium isn't at `/opt/pw-browsers/chromium`. Convert the shots you want to JPEG in `public/screens/` (for example `ffmpeg -i shot.png -q:v 2 shot.jpg`). If a section's layout changes, update that scene's camera keyframes.

## Changing the narration

The voiceover is generated locally with [Kokoro](https://github.com/thewh1teagle/kokoro-onnx), an open-source TTS model. Edit the lines in `scripts/generate-voiceover.py`, then:

```bash
pip install kokoro-onnx soundfile
curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.int8.onnx
curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
python scripts/generate-voiceover.py --models .
```

It rewrites `public/voiceover/*.mp3` and `src/voiceover.json`. Scene lengths follow the narration automatically (`src/timeline.ts`). Change `VOICE` in the script for a different voice (for example `af_heart` or `bm_george`).

## Music

`public/music.mp3` is synthesized from scratch by `scripts/generate-music.py` (numpy + ffmpeg), so there is no licensing to worry about. Swap in any track you own by replacing the file; the volume curve is in `src/ArdPromo.tsx`.

## Fonts and brand

Inter, the site's typeface, is bundled in `public/fonts` (SIL Open Font License, `public/fonts/OFL.txt`) so renders work offline. The logo is the site's own `src/assets/AR.svg`.
