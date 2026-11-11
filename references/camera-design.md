# Camera design: the flat → 3D reveal

This document captures the changes from our Shibuya V2 collaboration. It complements the original [Simcraft reference](https://github.com/dotslashsimran/simcraft/blob/main/skills/video/perspective-illusion/reference.md).

## Why the first version felt weak

The project initially used a more complicated original camera sequence, changed angles quickly and ran only a few frames per second. An optical-flow `minterpolate` pass then guessed intermediate images, blurring crowds and fine billboards. Those derived frames were not actual Three.js renders.

## Our corrected camera setup

| State | Horizontal FOV | Yaw | Focus-plane width `W` | What it reveals |
|---|---:|---:|---:|---|
| Flat entry | 2° | 0° | 28 m | Street and far objects almost stack together |
| Wide front | 78° | 0° | 25.5 m | Distinct layers between crowd, road, shops and far avenue |
| Nearer wide | 84° | 0° | 17.5 m | Stronger street-level depth |
| Side flat | 3° | 30° | 27 m | A new compressed view from a corner |
| Side wide | 58° | 30° | 23 m | Side street, buildings and road separate in depth |

The camera rig calculates distance from the focus plane approximately as

`D = (W/2) / tan(fov/2)`.

For a real dolly zoom, retain similar `W` and constant `zf` while changing `fov`, rather than simply changing the camera's field of view at a fixed position. Camera verticals remain upright because pitch is handled by lens shift.

## Composition audit

Inspect these timestamps in the example scene:
- ~0.0 s: flattened frontal scene.
- ~2.0 s: visible progression toward wide.
- ~3.6 s: main wide reveal.
- ~5.3 s: reset to the compressed pose.
- ~6.9 s: side angle in 3D.
- ~8.3 s: deep corner perspective.
- ~9.9 s: returns to the first pose.

Render stills **at intermediate points**. A pair of dramatically different endpoints is not enough if the transition in between is illegible.

## Seam and motion

All animated objects are functions of a looping millisecond time. Only switch hidden repeated-object layouts while the lens is compressed. The last shot must equal the first in composition, and dynamic actors should not pop across the loop boundary.

## Rendering quality tradeoffs

When hardware acceleration is unavailable, a lower native fps may be sharper than an optically interpolated higher fps. The bundled V2 demonstration is **1280×720 at 15 fps**, with a crisp single sample and reduced rain and bloom, but fine-geometry aliasing/flicker is still visible. For genuinely high-quality output, render 24–30 native fps with **same-timestamp** subpixel AA samples (at least 4) and inspect final motion. Avoid combining different scene times to smooth motion without the user's approval.
