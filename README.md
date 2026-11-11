<div align="center">

<img src="assets/hero.svg" width="100%" alt="Perspective Illusion Studio — an open filmmaking toolkit for camera-based 3D optical illusions" />

<br/>

<strong>One scene. Two perspectives. An entirely different world.</strong>

<br/><br/>

A reusable filmmaking Skill for transforming apparently flat illustrations into  
layered, explorable Three.js environments — with real geometry and camera motion.

<br/><br/>

<a href="#featured-films">Watch the films</a> &nbsp;·&nbsp;
<a href="#the-illusion">How it works</a> &nbsp;·&nbsp;
<a href="#get-started">Get started</a> &nbsp;·&nbsp;
<a href="SKILL.md">Read the Skill</a> &nbsp;·&nbsp;
<a href="README.zh-CN.md">简体中文</a>

<br/><br/>

<a href="https://github.com/Dreaminmaster/perspective-illusion-studio/actions/workflows/verify.yml"><img src="https://github.com/Dreaminmaster/perspective-illusion-studio/actions/workflows/verify.yml/badge.svg" alt="Repository checks" /></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-8da7cb?style=flat&labelColor=172139" alt="MIT License" /></a>
<a href="https://threejs.org/"><img src="https://img.shields.io/badge/rendering-Three.js-8da7cb?style=flat&labelColor=172139" alt="Three.js" /></a>

</div>

---

## Featured films

**The two scenes that best show how this Skill transforms space.** Watch a complete camera move right here, then open the video or explore its editable source.

<table>
<tr>
<td width="50%" valign="top">
  <a href="examples/shibuya-demo.mp4"><img src="assets/shibuya-loop.gif" width="100%" alt="Animated original Shibuya Scramble scene: a compressed city view expands into a 3D street crossing" /></a>
  <br/><br/>
  <sub>01 / THE ORIGINAL STUDY · TOKYO</sub>
  <h3>SHIBUYA SCRAMBLE</h3>
  <p>Our first camera experiment. A rain-lit Tokyo crossing transforms from a graphic street tableau into an explorable 3D city.</p>
  <p><a href="examples/shibuya-demo.mp4"><strong>▶ Watch film</strong></a> &nbsp;·&nbsp; <a href="explore.html">Explore in 3D</a></p>
</td>
<td width="50%" valign="top">
  <a href="scenes/aeterna-forum/aeterna_final.mp4"><img src="scenes/aeterna-forum/preview.gif" width="100%" alt="Animated AETERNA Greco-Roman forum showing an actual telephoto to wide-angle 3D perspective reveal" /></a>
  <br/><br/>
  <sub>02 / THE CLASSICAL WORLD · AETERNA</sub>
  <h3>THE ETERNAL FORUM</h3>
  <p>Marble columns, a ceremonial arch and an imaginary imperial city unfold beneath the warm Mediterranean sunset.</p>
  <p><a href="scenes/aeterna-forum/aeterna_final.mp4"><strong>▶ Watch film + score</strong></a> &nbsp;·&nbsp; <a href="scenes/aeterna-forum/">Explore source</a></p>
</td>
</tr>
</table>

<div align="center">
  <sub>Two genuine 3D render sequences, not zoomed still images. Select either animation to open its full MP4.</sub>
</div>

<br/>

## Selected worlds

A small collection of three environments, all created with the same camera method. **Tokyo and AETERNA lead the visual story; Night City remains a complete third example.**

<table>
<tr>
<td width="33%" valign="top">
  <a href="examples/shibuya-demo.mp4"><img src="assets/stills/02-reveal.jpg" width="100%" alt="Shibuya Scramble illustrated night street still" /></a>
  <br/>
  <sub>URBAN / TOKYO</sub>
  <p><strong>Shibuya Scramble</strong><br/>Wet neon streets, animated crowds and an interactive free-camera viewer.</p>
  <p><a href="examples/shibuya-demo.mp4">MP4</a> · <a href="explore.html">Viewer</a> · <a href="scene.html">Source</a></p>
</td>
<td width="33%" valign="top">
  <a href="scenes/aeterna-forum/aeterna_final.mp4"><img src="scenes/aeterna-forum/poster.jpg" width="100%" alt="AETERNA Greco-Roman imperial forum still" /></a>
  <br/>
  <sub>CLASSICAL / AETERNA</sub>
  <p><strong>The Eternal Forum</strong><br/>An imaginary empire with temples, arches, sculptural fountains and a bespoke score.</p>
  <p><a href="scenes/aeterna-forum/aeterna_final.mp4">MP4</a> · <a href="scenes/aeterna-forum/">Source & audio</a></p>
</td>
<td width="33%" valign="top">
  <a href="scenes/night-city-2077/night_city_2077.mp4"><img src="scenes/night-city-2077/poster.jpg" width="100%" alt="Night City 2077 neon-futurist 3D city still" /></a>
  <br/>
  <sub>FUTURISTIC / NIGHT CITY</sub>
  <p><strong>Night City 2077</strong><br/>A neon-drenched futuristic variation with hovercars, megatowers and synth music.</p>
  <p><a href="scenes/night-city-2077/night_city_2077.mp4">MP4</a> · <a href="scenes/night-city-2077/">Source & audio</a></p>
</td>
</tr>
</table>

<sub>Every film: approximately 10 seconds · 1280 × 720 · 15 native FPS · H.264. These are stylised and fictionalised worlds, not exact historical, geographic or game reconstructions.</sub>
---

## The illusion

A perspective illusion is not a zoom applied to a finished image. The world is built in **three dimensions first**. From an extreme telephoto camera, the distance between its objects almost disappears. As the camera dollies and the lens opens, the same geometry reveals its depth.

<table>
<tr>
<td width="33%"><img src="assets/stills/01-flat.jpg" width="100%" alt="2 degree telephoto flattens the Shibuya scene" /></td>
<td width="33%"><img src="assets/stills/02-reveal.jpg" width="100%" alt="Wide-angle dolly zoom separates street layers" /></td>
<td width="33%"><img src="assets/stills/03-corner.jpg" width="100%" alt="Oblique perspective reveals a second view" /></td>
</tr>
<tr>
<td><strong>01 — Compress</strong><br/><sub>~2° telephoto. Buildings and people appear layered on one flat plane.</sub></td>
<td><strong>02 — Unfold</strong><br/><sub>74–84° wide-angle reveal. The camera moves while the focal plane stays anchored.</sub></td>
<td><strong>03 — Reframe</strong><br/><sub>A new oblique angle makes the hidden spatial relationships visible again.</sub></td>
</tr>
</table>

The underlying dolly-zoom relationship is:

`D = (W / 2) / tan(FOV / 2)`

Here `W` is the width at the focus plane, `FOV` is the horizontal field of view, and `D` is the camera-to-focus-plane distance. The Skill keeps this composition controlled while bringing out real parallax. See [camera design](references/camera-design.md).

## Built for repeatable production

<table>
<tr>
<td width="25%" valign="top"><strong>01 / MODEL</strong><br/><sub>Construct architecture, characters, signage and props with editable Three.js geometry.</sub></td>
<td width="25%" valign="top"><strong>02 / DIRECT</strong><br/><sub>Animate telephoto compression, lens expansion and a secondary viewpoint.</sub></td>
<td width="25%" valign="top"><strong>03 / RENDER</strong><br/><sub>Composite geometry, shadows, normals and outlines into illustrated frames.</sub></td>
<td width="25%" valign="top"><strong>04 / VERIFY</strong><br/><sub>Review keyframes, motion continuity, loop joins and output metadata.</sub></td>
</tr>
</table>

The renderer outputs **native 3D frames**, rather than inventing in-between images using optical-flow interpolation. This avoids the large shape distortions we encountered in early experiments, though fine-line shimmer can still appear with limited antialiasing or low native frame rates.

---

## Get started

**Explore an existing city, or build a new illusion.** The source is open and local; you do not need a hosted browser or paid video service.

### Path A — Explore Shibuya on your Mac

[**Download the entire repository as ZIP**](https://github.com/Dreaminmaster/perspective-illusion-studio/archive/refs/heads/main.zip) · [Open interactive viewer source](explore.html)

Extract the folder and double-click **`start-mac.command`**. The launcher checks Node.js, installs dependencies the first time, then opens the interactive Three.js street viewer in your browser.

<sub>Controls: drag to orbit · right-drag to pan · scroll to zoom · W/A/S/D to move · Q/E for height · F to replay the cinematic camera · R to reset. Node.js 22+ is required; Chrome is recommended. The local server stops when you close its terminal.</sub>

### Path B — Run the Skill and render

~~~bash
git clone https://github.com/Dreaminmaster/perspective-illusion-studio.git
cd perspective-illusion-studio
npm ci
npm test

# Explore the local Three.js scene
npm run explore

# Or render the camera sequence into an MP4
npm run preview
npm run render:crisp
~~~

**Requirements:** Node.js 22+, Chrome/Chromium, FFmpeg and a working WebGL backend. For local Chrome outside Linux, set `CHROME_BIN` to the executable path. High-quality rendering benefits from GPU acceleration. For a step-by-step brief, start with [SKILL.md](SKILL.md).

> **Example brief:** “Use the Perspective Illusion Studio Skill to create a 10-second illustrated Venetian canal. Begin near 2° telephoto, unfold the scene with a true camera dolly zoom, then reveal it from a second angle. Show keyframes before rendering and deliver the editable Three.js project.”

### Source map

| Start here | What it contains |
|:--|:--|
| [`SKILL.md`](SKILL.md) | The reusable filmmaking instructions for a coding assistant |
| [`scene.html`](scene.html), [`render.mjs`](render.mjs) | Shibuya scene and native-frame video renderer |
| [`explore.html`](explore.html) | Interactive local 3D viewer |
| [`scenes/`](scenes/) | Night City and AETERNA, including films, source and audio |
| [`references/`](references/) | Camera design and visual-quality checklist |
| [`scripts/verify-skill.mjs`](scripts/verify-skill.mjs) | Automated repository checks |

<details>
<summary><strong>Technical notes & limitations</strong></summary>

- The three bundled films are illustrative demonstrations at **720p, 15 native FPS**, not 4K or 60 FPS.
- Real 3D frames reduce interpolation warping; they do not guarantee flicker-free fine lines.
- The Shibuya viewer is interactive. The other two scenes are provided as editable Three.js projects rather than ready-made free-roam apps.
- The Skill is a set of instructions and files for compatible coding agents; this repository does **not** automatically install a permanent ChatGPT capability.
- Fictionalised urban settings and cyberpunk motifs are independent visual interpretations; no official game assets are claimed.

</details>

---

## Origin & credits

**The foundation:** [Simcraft / perspective-illusion](https://github.com/dotslashsimran/simcraft/tree/main/skills/video/perspective-illusion), by **Simran Sachdeva** (© 2026, MIT). Its Three.js template, camera method and multipass rendering utilities form the upstream basis for this project.

**The adaptation:** [Dreaminmaster](https://github.com/Dreaminmaster), working collaboratively with ChatGPT, developed the Shibuya demonstration and refined the lens choreography, clarity-oriented rendering workflow, reusable Skill documentation and additional scene experiments.

Original attribution and licence are preserved in [LICENSE](LICENSE) and [CREDITS.md](CREDITS.md).

<div align="center">

<sub>THREE WORLDS. ONE CAMERA LANGUAGE.</sub>

</div>
