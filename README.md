<div align="center">

<img src="assets/hero.svg" width="100%" alt="Perspective Illusion Studio — an open filmmaking toolkit for camera-based 3D optical illusions" />

<br/>

<strong>One scene. Two perspectives. An entirely different world.</strong>

<br/><br/>

A reusable filmmaking Skill for transforming apparently flat illustrations into  
layered, explorable Three.js environments — with real geometry and camera motion.

<br/><br/>

<a href="#selected-worlds">Explore the films</a> &nbsp;·&nbsp;
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

## Selected worlds

**Three original visual experiments. One camera language.** Every film below comes with its editable scene and rendering source; the videos are the results of real 3D renders, not animated reference stills.

<table>
<tr>
<td width="33%" valign="top">
  <a href="scenes/aeterna-forum/aeterna_final.mp4"><img src="scenes/aeterna-forum/poster.jpg" width="100%" alt="AETERNA — an imagined Greco-Roman imperial forum at sunset" /></a>
  <br/><br/>
  <sub>01 &nbsp;/&nbsp; CLASSICAL WORLD</sub>
  <h3>AETERNA</h3>
  <p>An invented Greco-Roman capital. Marble temples, a triumphal arch, fountain and a city unfolding at sunset.</p>
  <p><a href="scenes/aeterna-forum/aeterna_final.mp4"><strong>Watch film</strong></a> &nbsp;·&nbsp; <a href="scenes/aeterna-forum/">3D project</a></p>
</td>
<td width="33%" valign="top">
  <a href="scenes/night-city-2077/night_city_2077.mp4"><img src="scenes/night-city-2077/poster.jpg" width="100%" alt="Night City 2077 — a fictional neon-futurist metropolis" /></a>
  <br/><br/>
  <sub>02 &nbsp;/&nbsp; FUTURISTIC WORLD</sub>
  <h3>NIGHT CITY 2077</h3>
  <p>Neon megastructures, aerial vehicles and holographic streets, inspired by cyberpunk aesthetics.</p>
  <p><a href="scenes/night-city-2077/night_city_2077.mp4"><strong>Watch film</strong></a> &nbsp;·&nbsp; <a href="scenes/night-city-2077/">3D project</a></p>
</td>
<td width="33%" valign="top">
  <a href="examples/shibuya-demo.mp4"><img src="assets/stills/02-reveal.jpg" width="100%" alt="Shibuya Scramble — stylised Tokyo street crossing" /></a>
  <br/><br/>
  <sub>03 &nbsp;/&nbsp; URBAN WORLD</sub>
  <h3>SHIBUYA SCRAMBLE</h3>
  <p>The original collaboration: a rain-soaked Tokyo-inspired crossing with signs, crowds and layered architecture.</p>
  <p><a href="examples/shibuya-demo.mp4"><strong>Watch film</strong></a> &nbsp;·&nbsp; <a href="scene.html">3D scene</a></p>
</td>
</tr>
</table>

<sub>All three showcase films: approximately 10 seconds · 1280 × 720 · 15 native FPS. The environments are stylised and fictionalised; they are not exact recreations of real places or game scenes.</sub>

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

<div align="center">
  <a href="scenes/aeterna-forum/aeterna_final.mp4"><img src="scenes/aeterna-forum/preview.gif" width="76%" alt="AETERNA Greco-Roman forum — animated perspective reveal rendered in Three.js" /></a>
  <br/>
  <sub>Featured motion study: <a href="scenes/aeterna-forum/aeterna_final.mp4">AETERNA with original score</a> · <a href="scenes/aeterna-forum/storyboard.jpg">Camera storyboard</a></sub>
</div>

<br/>

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
