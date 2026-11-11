# NIGHT CITY 2077 — Perspective Illusion Studio

**A 10-second original, cyberpunk-themed Three.js scene** built with the perspective-illusion-studio skill maintained at [Dreaminmaster/perspective-illusion-studio](https://github.com/Dreaminmaster/perspective-illusion-studio).

This is an **original artistic interpretation inspired by the neon dystopian atmosphere of Cyberpunk 2077**, not gameplay, an official asset, or a reconstruction of a copyrighted game location. No commercial game music, characters or art are included.

## Camera story

- **0–1 s:** 2° telephoto compression. Multiple streets and objects look like a flat illustrated city.
- **1–4.4 s:** real camera dolly zoom, FOV 2° → 79° → 84°, revealing physical depth and near/far separation.
- **4.4–5.9 s:** return to a long-lens look while the hidden object arrangement changes.
- **5.9–8.4 s:** a -27° oblique camera opens from 3° to 62°.
- **8.4–10 s:** the camera returns to its initial composition for a loopable video.

The composition uses the original skill's shot interpolation, depth/normal/ink/lighting multipass shaders, real-time moving actors and subpixel antialiasing interfaces.

## Content created for this adaptation

- Futuristic modular megatowers with illuminated façade ribs
- Neon aerial skybridges and street-level energy guide markers
- Original canvas-drawn cybernetic billboard campaigns: Vanta Optics, Neural Sky, Black Ice, Kira Drive
- Cybernetic sign pylons, aerial hover taxis and rooftop machinery
- Night-blue/purple-grade materials, teal/pink/yellow lighting, wet street reflection
- A new ambient synth soundtrack procedurally composed in `soundtrack.py` from generated sine waves and noise (no samples)
- Source and rendered MP4 plus keyframe previews

## Render and play

Requirements: Node.js 22+, FFmpeg, local Chrome/Chromium and WebGL.

```bash
npm ci
mkdir -p stills
node render.mjs scene.html ignore.mp4 --preview --from=0 --to=10 --fps=15 --mink=1 --step=500
```

The included renderer uses `CHROME_BIN` if provided, otherwise `/usr/bin/google-chrome`. For native higher-frame-rate work, edit the render settings and use a GPU. The supplied example was rendered at **1280×720, 15 FPS, 10 seconds** with no synthetic motion interpolation.

## Credit

Base template `scramble_night.html` and the perspective-illusion camera/renderer: **Simran Sachdeva**, [Simcraft](https://github.com/dotslashsimran/simcraft/tree/main/skills/video/perspective-illusion), MIT licensed. Copyright and MIT text are retained in `LICENSE`. Adaptation and camera improvements originated from the Dreaminmaster + ChatGPT collaborative skill. The additional cyberpunk-themed elements are original procedural geometry and canvas graphics.

## Known limitations

The original sample's stylized, human-shaped figures and Tokyo-crossing proportions remain part of the visual base. This is not an exact 2077 game engine scene. Fine line and streetlight shimmer may remain because rendering is single-sample software WebGL rather than high-sample GPU antialiasing.
