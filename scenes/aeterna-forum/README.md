# AETERNA — The Eternal Imperial Forum

**An original imaginary Greco-Roman plaza created as a fully editable Three.js scene.**

Built using the [Perspective Illusion Studio Skill](https://github.com/Dreaminmaster/perspective-illusion-studio/blob/main/SKILL.md), derived from Simcraft's MIT-licensed perspective-illusion template.

## Created environment

A fictional classical Mediterranean imperial capital at sunset, not a reconstruction of a historic site.

- A monumental 3D triumphal arch with carved niches and ornamental reliefs
- Hilltop temple, terraces, marble staircases, and parallel colonnades
- A round sacred temple, oval amphitheatre and cypress groves
- Sea-deity fountain with separate real-geometry water jets
- Philosopher statues, goddess figures, SPQR-inspired mosaics and banners
- 100+ stylized toga-clad visitors, market stalls, amphorae, torches, fruit and foliage
- A procedural salmon-pink, lavender and gold sunset scene

## Camera design

| Time | Camera state |
| --- | --- |
| 0–1 seconds | 2 degree long lens compresses the entire city into a near-flat composition |
| 1–4.4 seconds | Dolly zoom unfolds depth up to 84 degrees |
| 4.4–5.8 seconds | Returns to the flat view |
| 5.8–8.4 seconds | 26 degree oblique reveal, widening from 3 to 62 degrees |
| 8.4–10 seconds | Returns to the opening for a loopable result |

The camera computes focal plane distance with: D = (W/2) / tan(FOV/2).

## Package files

- scene.html: fully programmatic Three.js environment
- roman_geometry.js: the original architecture and people model components
- assemble.py, simcraft_base.html: reproducible scene assembly from our original procedural geometry + the preserved inherited renderer
- render.mjs: crisp native-frame renderer
- soundtrack.py: original synthesized lyre, flute, strings and temple chimes
- aeterna_original_score.wav: generated stereo soundtrack
- aeterna_final.mp4: final 10-second cinematic film with audio
- aeterna_native_silent.mp4: original native 3D rendered frames
- poster.jpg, storyboard.jpg, preview.gif: static and animated previews
- LICENSE and CREDITS.md: complete original skill attribution

## Rendering

Requirements: Node.js 22+, Chrome/Chromium, FFmpeg and WebGL. The interactive source needs an HTTP server and installed node modules (not a file:/// URL).

~~~bash
npm ci
node render.mjs scene.html aeterna_native_silent.mp4 --preview --fps=15 --from=0 --to=10 --step=500 --mink=1
ffmpeg -i aeterna_native_silent.mp4 -i aeterna_original_score.wav -map 0:v -map 1:a -c:v copy -c:a aac -shortest aeterna_final.mp4
~~~

The bundled example was rendered at 1280 x 720, 15 native FPS. It does NOT use motion-estimated interpolation. Faster GPUs can produce true 24–30 FPS and multiple antialiasing samples, but that was not used for the example.

## Credits

Original Simcraft perspective-illusion camera, scene pipeline and render functions: Simran Sachdeva, MIT (see LICENSE). Perspective Illusion Studio workflow developed through Dreaminmaster + ChatGPT collaboration. AETERNA architecture, fictional civic space, materials, figures and sound were created for this demo. The reference image was used only for visual direction, not as a flat pan/zoom backdrop.

This is a stylized animation, not a photorealistic rendering or historically exact architecture.
