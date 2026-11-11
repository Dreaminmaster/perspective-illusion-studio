---
name: perspective-illusion-studio
description: Create polished, seamless flat-to-3D perspective-illusion films with physically constructed Three.js scenes, 2° telephoto-to-wide-angle dolly zooms, corner-view reveals, crisp native-frame rendering, and repeatable QA. Use for Japanese illustrated street scenes, Shibuya-style crossings, indoor aisles, architectural optical illusions, or any user request for a 2D-looking environment that transforms into recognizable 3D depth.
---

# Perspective Illusion Studio — Collaborative Edition

This is a **working skill**, not just a text-to-video prompt. It directly extends the [Simcraft perspective-illusion skill](https://github.com/dotslashsimran/simcraft/tree/main/skills/video/perspective-illusion) by Simran Sachdeva (MIT). Our Shibuya iteration added stronger lens-based reveals and a separate crisp-render workflow.

## Intended result

Produce a looping illustrated 3D MP4 that clearly demonstrates two stages: (1) an almost flat-looking telephoto composition and (2) the **same real scene** expanding into deep perspective via camera dolly zoom. The user should be able to identify three-dimensional foreground/background separation without subtitles or AI-generated transitional frames.

## Mandatory workflow

1. **Study reference and define the scene.** Describe the long depth axis; list repeating elements at different distances, hero objects, close-up detail, and which physical plane remains the visual anchor. Determine whether exact architecture is required or a stylised interpretation is acceptable.
2. **Use a real Three.js scene.** Start from `scene.html` (adapted from Simcraft `scramble_night.html`). Preserve `window.render`, `window.renderMany`, `window.probe`, `window.READY`, `window.setJitter`, the 4-pass materials and outline compositing.
3. **Lock the telephoto composition.** Start near `fov: 2` degrees, and keep the main crossing / objects readable. Repeat lamps, signs, pedestrians and building edges at genuinely different `z` positions. This lens compression, not a flat backdrop, creates the illusion.
4. **Build an unmistakable dolly zoom.** Open to approximately `fov: 65–85` degrees while the camera moves closer. Keep `zf` (focus plane) fixed and `W` (framed width at `zf`) nearly constant. For this project's example, the scene uses `2° → 78° → 84°`, then a separate `3° → 58°` corner reveal at `yaw: 30°`. Modify `SHOTS` and `KEYS` together; sample the transition in stills, not only its endpoints.
5. **Only move hidden swap objects under flat holds.** The `lay` and `cs` variables reposition the repeated objects. Do not expose object teleportation during the wide-angle reveal. Ensure the final camera pose and dynamic objects match the opening so the loop joins.
6. **Create sharp visual hierarchy.** Keep Japanese/English signs in canvas textures, use carefully designed fictional ads, thin but stable ink outlines, material borders, believable shopfronts and windows, and detail on every surface exposed during the corner shots. For wet night scenes, use world-anchored haze, physically separated surfaces, modest bloom and fewer rain streaks.
7. **Render diagnostic stills first.** Inspect the actual first flat frame, the strongest wide reveal, the side-angle reveal and the final return. Record the perceived camera transformation. If the flat view is not compressed or the reveal shows little parallax, alter the camera and/or scene depth before rendering a video.
8. **Render the video from actual 3D frames.** Avoid optical-flow interpolation (e.g. `minterpolate`) for fast perspective changes: it can create warping and double edges. Use `render.mjs` for clear, zero-shutter-time samples; for better edge antialiasing, set `--mink=4` so several subpixel renders accumulate at the **same timestamp**. The included example demo is **15 fps, 1280×720**, generated on a software GPU; higher fps needs more rendering capacity.
9. **Check finished output.** Use `npm test`, `ffprobe`, the Simcraft `motion_check.py` and `blink_map.py` checks if installed. Inspect the beginning and end frame manually and do not claim flicker-free results without verifying. Re-render if camera transitions are unclear, major shapes flicker, or the end snaps.
10. **Deliver source + demo.** Include the editable scene, scripts, assets, complete MIT attribution and an MP4. Make the quality compromises explicit rather than hiding them.

## Quick start

Requires Node.js 22+, Chrome/Chromium, ffmpeg and a working WebGL backend.

```bash
npm ci
npm test
# May take several minutes on a CPU/software GPU
npm run preview
# Native rendering, no artificial in-between frames; higher quality on a GPU
npm run render:crisp
```

On macOS, set `CHROME_BIN=/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome` (with shell quoting when used). When a Chrome executable is not available, Playwright can provision its own build with `npx playwright install chromium` after adapting the renderer. On Linux the default executable is `/usr/bin/google-chrome`.

For an alternate topic (street, room, aisle, station, park), keep the camera rig, passes, and render hooks, then replace scene geometry, textures, signage and animated actors. Adapt the time keys only after checking stills.

## Skill-specific controls

| Goal | Control | Practical setting |
|---|---|---|
| Extremely flat opening | `SHOTS.v2flat.fov` | Around 2° |
| Deep perspective reveal | `SHOTS.v2wide.fov` | 65–85° |
| Similar apparent subject size | `zf`, `W` | Hold focus plane and framing |
| Corner transformation | `yaw`, `fov` | Turn ~20–35°, then widen lens |
| Frame clarity | `--mink` | 1 for quick preview, 4 for crisp AA |
| Smoothness | `--fps` | 15 sample demo, 24–30 preferred |
| Avoid blur | `render.mjs` | No optical-flow frame interpolation |
| Limit flicker | shader, geometry, AA | World-anchored detail, no coplanar overlays |

Read [camera design](references/camera-design.md), [visual-quality checks](references/quality-checks.md), and [attribution](CREDITS.md) when modifying the underlying technique.

## Quality gates

- A recognisable near-flat beginning and a clearly three-dimensional wide shot.
- A camera move that keeps the composition anchored while depth expands.
- Crisp writing/architecture edges, especially on the moving shots.
- No accidental jumps, repeated empty buildings, sudden population changes or unintentional loop seams.
- The demo video is a rendered scene, not a video generated from AI stills.
- Preserve source attribution and original MIT license.

## Boundaries

- Do not call an MP4 high-resolution or 60 fps unless its metadata confirms it.
- Do not promise that this skill is automatically installed into ChatGPT just because the repository exists: it is a reusable `SKILL.md` package and must be explicitly loaded/supported by the execution environment.
- Do not use the original creator's illustrative characters, code or texture assets without retaining the upstream copyright notice and license.
