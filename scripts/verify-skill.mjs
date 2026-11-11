import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = p => fs.readFileSync(p, 'utf8');
const required = [
  'SKILL.md', 'scene.html', 'render.mjs', 'render_fast.mjs',
  'LICENSE', 'CREDITS.md', 'README.md',
  'references/camera-design.md', 'references/quality-checks.md',
  'examples/shibuya-demo.mp4', 'examples/shibuya-keyframes.jpg',
];
for(const f of required) assert.ok(fs.existsSync(f), `Missing ${f}`);
const scene = read('scene.html');
const skill = read('SKILL.md');
const render = read('render.mjs');
assert.match(skill, /^---\s*\nname: perspective-illusion-studio/m, 'Skill metadata missing');
for(const hook of ['window.READY', 'window.render =', 'window.renderMany =', 'window.probe =', 'window.setJitter ='])
  assert.ok(scene.includes(hook), `Missing rendering hook: ${hook}`);
for(const v of ['const BASEFLAT', 'const BASEWIDE', 'fov:2.0', 'fov:78', 'fov:84', 'fov:58', 'yaw:30'])
  assert.ok(scene.includes(v), `Missing camera technique: ${v}`);
assert.ok(render.includes('a = mid, c = mid'), 'Renderer must use identical time samples for crisp output');
assert.ok(!render.includes('minterpolate'), 'Optical frame interpolation must not be used');
const textureCount = fs.readdirSync('cutouts').filter(x=>x.endsWith('.png')).length;
assert.ok(textureCount>=12, 'Missing source cut-outs');
const v = fs.statSync('examples/shibuya-demo.mp4');
assert.ok(v.size>1_000_000, 'Example video missing/too small');
assert.match(read('LICENSE'), /Copyright \(c\) 2026 Simran Sachdeva/);
console.log(`Skill checks passed: metadata, hooks, camera, crisp rendering, ${textureCount} cutouts, MP4, license.`);
