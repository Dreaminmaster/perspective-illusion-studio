# Instructions for coding assistants

Read [SKILL.md](SKILL.md) before editing the 3D scene or renderer.

- Preserve original Simcraft MIT license and credits.
- The user values a dramatic camera-based flat-to-3D illusion more than extra effects.
- Validate flat and wide frame compositions before committing a long render.
- Do not introduce optical-flow frame interpolation to hide a low native frame rate.
- Keep source and final MP4 reproducible, and accurately report fps/resolution.
- Prefer making one change at a time to the camera rig, rerendering the three representative stills, and comparing them before a full export.
- Run `npm test` before publishing.
