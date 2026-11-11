from pathlib import Path
base=Path('simcraft_base.html').read_text()
kit=base[:base.index('// ---------- layout ----------')]
geom=Path('roman_geometry.js').read_text()
camera=base[base.index('// ---------- cameras: keyframes'):base.index('// ---------- illustration pass ----------')]
post=base[base.index('// ---------- illustration pass ----------'):]
kit=kit.replace('<title>SHIBUYA SCRAMBLE | Tokyo Perspective Illusion</title>','<title>AETERNA — Greco-Roman Imperial Forum | Perspective Illusion</title>')
kit=kit.replace('margin: 0; background: #E8451E','margin: 0; background: #D88879')
kit=kit.replace('gr.addColorStop(0, "#DA3704"); gr.addColorStop(1, "#DA3704");','gr.addColorStop(0, "#D9A0B4"); gr.addColorStop(1, "#F3C68B");')
kit=kit.replace('// palette measured from the reference frames (k-means over four frames)','// Warm hand-picked original Greco-Roman material palette')
camera=camera.replace('const BASEFLAT = { x:0, y:3.7, zf:0, W:28, fov:2.0, H:-.05, lay:0, cs:1, yaw:0, el:0 };','const BASEFLAT = { x:0, y:19.5, zf:-95, W:109, fov:2.0, H:.03, lay:0, cs:1, yaw:0, el:0 };')
camera=camera.replace('const BASEWIDE = {...BASEFLAT, fov:78, W:25.5};','const BASEWIDE = {...BASEFLAT, fov:74, W:100, y:13.0, H:-.17};')
camera=camera.replace('const CLOSE = {...BASEWIDE, fov:84, W:17.5, x:1.0, y:3.4};','const CLOSE = {...BASEWIDE, fov:84, W:87, x:.3, y:11.0, H:-.16};')
camera=camera.replace('const SIDEFLAT = {...BASEFLAT, x:0, y:4.7, fov:3, W:27, yaw:30, H:.07, lay:1 };','const SIDEFLAT = {...BASEFLAT, x:0, y:18.0, fov:3, W:118, yaw:26, H:.06, lay:1 };')
camera=camera.replace('const SIDEWIDE = {...SIDEFLAT, fov:58, W:23, yaw:30};','const SIDEWIDE = {...SIDEFLAT, fov:62, W:108, yaw:26, y:13.5, H:-.11};')
camera=camera.replace('v2flat:BASEFLAT, v2flatB:{...BASEFLAT, W:27.2}, v2flatD:{...BASEFLAT,lay:1},','v2flat:BASEFLAT, v2flatB:{...BASEFLAT, W:97}, v2flatD:{...BASEFLAT,lay:1},')
camera=camera.replace('v2sideCloser:{...SIDEWIDE,W:19},','v2sideCloser:{...SIDEWIDE,W:88},')
camera=camera.replace('cam.near = Math.max(.05, Math.min(1, (Math.min(camZ, D) - 8) * .5));','cam.near = Math.max(.5, Math.min(8, D / 450));')
camera=camera.replace('[9680,"v2flat"],[10000,"v2flat"]', '[9680,"v2flatB"],[10000,"v2flat"]')
post=post.replace('new THREE.Color("#DA3704")','new THREE.Color("#F4C398")')
post=post.replace('new THREE.Color("#0b0b14")','new THREE.Color("#5E3F43")')
# Replace city night sky and contrast with a luminous ancient Mediterranean sunset.
post=post.replace('vec3 hor = vec3(.52, .27, .36), low = vec3(.24, .16, .34), mid = vec3(.08, .1, .26), zen = vec3(.02, .03, .1);','vec3 hor = vec3(.78, .40, .41), low = vec3(.79, .46, .59), mid = vec3(.51, .47, .73), zen = vec3(.31, .37, .62);')
post=post.replace('vec3 ccol = mix(vec3(.36, .2, .3), vec3(.16, .14, .28),','vec3 ccol = mix(vec3(.94, .59, .52), vec3(.87, .69, .75),')
post=post.replace('smoothstep(28., 80., length(wp0.xz)) * .25','smoothstep(100., 340., length(wp0.xz)) * .12')
post=post.replace('vec3(.62, .64, .80)','vec3(.78, .65, .70)')
post=post.replace('vec3(.6, .63, .82)','vec3(.78, .67, .74)')
post=post.replace('float wet = (P.y < .08 ? .5 : .3) + pud * .45','float wet = (P.y < .08 ? .25 : .12) + pud * .23')
post=post.replace('float lum = dot(c, vec3(.2126, .7152, .0722)); c = max(mix(vec3(lum), c, 1.18), 0.);','float lum = dot(c, vec3(.2126, .7152, .0722)); c = max(mix(vec3(lum), c, 1.07), 0.);')
post=post.replace('c *= mix(1., .74, smoothstep(.55, 1.08','c *= mix(1., .86, smoothstep(.55, 1.08')
# Color pass previously intentionally removed blur, preserve crisp native frames.
assert 'window.renderMany' in post and 'window.READY' in post
out=kit+'\n'+geom+'\n'+camera+'\n'+post
Path('scene.html').write_text(out)
print('assembled',len(out),'bytes, character',len(out),'sections')
for t in ['function column','function arch','// ---------- cameras','window.renderMany','window.render =']:
 print(t, t in out)
