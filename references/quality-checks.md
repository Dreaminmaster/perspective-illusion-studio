# Practical quality assurance

Run these steps before publishing a new Perspective Illusion Studio video.

## Static checks

```sh
npm test
```

The skill checker validates the existence of the expected scene/render hooks, local example assets, camera constants, packaging and license.

## Video metadata

```sh
ffprobe -v error -show_entries stream=codec_name,width,height,avg_frame_rate,nb_frames \
  -show_entries format=duration,size -of default=noprint_wrappers=1 examples/shibuya-demo.mp4
```

Current bundled demo: **H.264, 1280×720, 15 fps, 150 frames, 10 seconds**.

## Motion / flicker analysis

The original repository includes `skills/video/vox-explainer/scripts/motion_check.py` and `skills/video/perspective-illusion/scripts/blink_map.py`. Use them with the final MP4 if the dependencies (numpy, pillow) are installed.

Known limitation: the V2 sample passed the motion-freeze test, but the flicker checker still detected aliasing in near-static segments. Do not label the demo flicker-free.

## Visual checklist

1. Does the opening resemble a single compressed drawing? 
2. Does the frontal reveal clearly expose near and far objects?
3. Is the 30° corner reveal visually distinct?
4. Is there warping or doubled outlines? If yes, disable optical flow and render true intermediate frames.
5. Are signs legible and made of canvas textures, not hallucinated raster lettering?
6. Does the final pose match the opening pose, and do all moving actors loop?
7. Is MP4 playable in a standard browser and on mobile?
8. Is `LICENSE` included and is upstream credit retained?

## Hardware notes

A CPU/software WebGL renderer can be very slow. Lower resolution or frames per second **only for previews**, and report resulting dimensions and fps accurately. High FPS is not a substitute for actual image quality. To upgrade production quality, first enable native AA and hardware GPU, then increase fps and resolution.
