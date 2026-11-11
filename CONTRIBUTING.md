# Contributing

Contributions are welcome, especially:
- geometry and camera updates that increase the clarity of the illusion;
- verifiable performance improvements to the WebGL / Playwright renderer;
- reduced line aliasing, shadow flicker, and better loop seams;
- alternative scenes that retain the same rendering contract;
- independent visual regression tests.

Before opening a PR, run `npm test`, confirm that the example video still plays and report fps, resolution, GPU/software renderer, and the quality tradeoffs. Credit the upstream project when reusing substantial code or assets.
