// ROMAN IMPERIAL FORUM — fully original, metrically positioned procedural geometry
const END=-240, TICK=[],GLOW=[],NOINK=[],WALKERS=[],CONES=[];
const M={
  marble:mat("#F7E6C8"),ivory:mat("#EEE2CF"),stone:mat("#D5B798"),rose:mat("#CD9988"),terra:mat("#B76E5E"),
  gold:mat("#E6BC64"),bronze:mat("#597667"),wine:mat("#8F2B3D"),navy:mat("#2A4464"),olive:mat("#527A4A"),
  leaf:mat("#315744"),dark:mat("#755D61"),sky:mat("#FBEBCE"),water:mat("#91CFD2",{transparent:true,opacity:.72,depthWrite:false}),
  flame:mat("#FFD46A",{emissive:"#FA9E39",emissiveIntensity:1.7})
};
function plane(w,d,m,x,y,z){const o=put(new THREE.Mesh(new THREE.PlaneGeometry(w,d),m),x,y,z,-Math.PI/2);o.castShadow=false;return o;}
function sph(r,m,x,y,z){return put(new THREE.Mesh(new THREE.SphereGeometry(r,12,8),m),x,y,z);}
function tor(r,t,m,x,y,z,rx=Math.PI/2){return put(new THREE.Mesh(new THREE.TorusGeometry(r,t,8,40),m),x,y,z,rx);}
function con(r,h,m,x,y,z){return put(new THREE.Mesh(new THREE.ConeGeometry(r,h,12),m),x,y,z);}
function stoneTex(){
 const c=document.createElement("canvas");c.width=c.height=1024;const g=c.getContext("2d");
 g.fillStyle="#ECD6B7";g.fillRect(0,0,1024,1024);
 for(let yy=0;yy<1024;yy+=128)for(let xx=0;xx<1024;xx+=128){
   g.fillStyle=["#F7E7CB","#E9D1B0","#EED9C3","#DFBA9E"][Math.floor(rnd()*4)];
   g.fillRect(xx+2,yy+2,124,124);
   g.strokeStyle="#B99A7E";g.lineWidth=2;g.strokeRect(xx+2,yy+2,124,124);
   for(let j=0;j<4;j++){g.strokeStyle="rgba(110,85,70,.12)";g.beginPath();g.moveTo(xx+rnd()*120,yy);g.bezierCurveTo(xx+24,yy+66,xx+95,yy+55,xx+rnd()*120,yy+128);g.stroke();}
 }
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(5,19);return t;
}
plane(210,390,new THREE.MeshToonMaterial({map:stoneTex(),gradientMap:ramp}),0,-.02,-85);
for(let i=0;i<6;i++){box(100,.3,1.6,i%2?M.ivory:M.marble,0,i*.25,27+i*1.55);box(100,.07,.1,M.gold,0,i*.25+.18,26.2+i*1.55);}
for(const sx of [-1,1])box(.16,.07,210,M.gold,sx*20,.06,-62);
const mosaic=(()=>{const c=document.createElement("canvas");c.width=c.height=512;const g=c.getContext("2d");
 g.fillStyle="#E2C8A6";g.fillRect(0,0,512,512);g.translate(256,256);
 for(let r=235;r>25;r-=17){g.strokeStyle=r%2?"#9E7858":"#EBCB84";g.lineWidth=r%2?12:8;g.beginPath();g.arc(0,0,r,0,7);g.stroke();}
 g.fillStyle="#4D4A52";g.beginPath();g.arc(0,0,127,0,7);g.fill();
 g.fillStyle="#E6BB68";g.font="bold 72px Georgia";g.textAlign="center";g.fillText("SPQR",0,18);
 for(let i=0;i<36;i++){const a=i*Math.PI/18;g.save();g.rotate(a);g.fillRect(-4,-218,8,21);g.restore();}
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
plane(17,17,new THREE.MeshToonMaterial({map:mosaic,gradientMap:ramp}),0,.07,8);
function column(h=12,r=.85){
 cyl(r*1.38,r*1.38,.33,M.stone,0,.17,0);
 cyl(r*1.12,r*1.12,.28,M.gold,0,.42,0);
 cyl(r*.92,r*1.08,h-1.4,M.marble,0,h*.50,0,24);
 for(let a=0;a<12;a++){const t=a*Math.PI/6;cyl(.048,.055,h-1.7,M.stone,Math.sin(t)*r*.93,h*.49,Math.cos(t)*r*.93,6);}
 cyl(r*1.12,r*1.12,.28,M.ivory,0,h-.48,0);
 for(let k=0;k<8;k++){const a=k*Math.PI/4;con(.25,.85,M.olive,Math.sin(a)*r*.85,h-.70,Math.cos(a)*r*.85);}
 box(r*2.9,.26,r*2.9,M.marble,0,h-.10,0);
}
function arch(w,h,opening,dep,m){
 const s=new THREE.Shape();s.moveTo(-w/2,0);s.lineTo(w/2,0);s.lineTo(w/2,h);s.lineTo(-w/2,h);s.closePath();
 const hh=new THREE.Path();const sp=opening*.82;hh.moveTo(-opening,0);hh.lineTo(-opening,sp);hh.absarc(0,sp,opening,Math.PI,0,true);hh.lineTo(opening,0);hh.closePath();s.holes.push(hh);
 return new THREE.Mesh(new THREE.ExtrudeGeometry(s,{depth:dep,bevelEnabled:false,curveSegments:20}),m);
}
// Distinct repeating lateral architectural layers, 12 m apart in actual depth.
for(const side of [-1,1])for(let i=0;i<13;i++){
 const z=19-i*14.1;
 group(()=>{
   const a=arch(13,15,4.4,3.4,M.ivory);put(a,0,0,-1.7);
   for(const xx of [-5.6,5.6])for(const zz of [-1.8,1.8])group(()=>column(14,.7),xx,0,zz);
   box(14.5,.8,6,M.stone,0,15.1,0);
   box(14.6,.15,6.2,M.gold,0,15.6,0);
   for(const xx of [-4.8,0,4.8])group(()=>column(5.2,.43),xx,15.8,-1.1);
   box(14.5,.65,6,M.marble,0,21.0,0);
   box(14.9,.14,6.2,M.gold,0,21.4,0);
   for(const xx of [-5.5,0,5.5])con(.5,1.0,M.stone,xx,22.2,0);
 },side*35.5,0,z,side*Math.PI/2);
}
// Elevated stairs and the sacred hill terrace. All are independent 3D geometry.
for(let k=0;k<14;k++){
 box(118,.78,2.5,k%2?M.marble:M.ivory,0,1.0+k*.75,-125-k*2.5);
 box(119,.12,.15,M.gold,0,1.45+k*.75,-125-k*2.5);
}
box(150,9.0,74,M.stone,0,17.4,-183);
function tri(w,h,d,m,x,y,z){const sh=new THREE.Shape();sh.moveTo(-w/2,0);sh.lineTo(0,h);sh.lineTo(w/2,0);sh.closePath();return put(new THREE.Mesh(new THREE.ExtrudeGeometry(sh,{depth:d,bevelEnabled:false}),m),x,y,z);}
group(()=>{
 box(78,1.5,38,M.ivory,0,.8,0);
 for(const z of [-14,14])for(let i=-6;i<=6;i++)group(()=>column(23,1.05),i*5.55,1.1,z);
 box(82,2.3,42,M.marble,0,26.0,0);
 box(83,.26,43,M.gold,0,27.1,0);
 tri(82,11,3.3,M.stone,0,27.2,16);
 tri(78,8.7,.3,M.rose,0,27.3,19.6);
 tri(75,7.5,.3,M.ivory,0,27.4,19.9);
 for(const x of [-27,-18,-9,0,9,18,27])sph(.54,M.gold,x,30,20.2);
 for(const x of [-16,-8,0,8,16])box(3,13,.15,M.dark,x,14,-5.6);
 for(const x of [-20,20])group(()=>column(10,.8),x,0,0);
},0,22.5,-194);
// Monumental triumphal arch with a genuine portal and sculptural bas-reliefs.
const GATE=group(()=>{
 put(arch(51,37,12,7,M.ivory),0,0,-3.5);
 for(const sx of [-1,1]){
  group(()=>column(32,1.3),sx*17,1.1,4);
  group(()=>column(32,1.3),sx*23,1.1,4);
  box(10,15,1.2,M.rose,sx*20,18.5,4.9);
  box(10,1.0,1.4,M.gold,sx*20,11.2,5.2);
 }
 box(55,2.5,8,M.marble,0,38.5,0);
 box(56,.25,8.6,M.gold,0,40.0,0);
 for(let i=-8;i<=8;i++){
   box(2.8,1.6,.3,i%2?M.rose:M.stone,i*3.1,39.0,4.3);
   sph(.45,M.gold,i*3.1,39.0,4.6);
 }
 for(const sx of [-1,1]){
   group(()=>{figure(4.4,M.ivory,true);con(1.2,2,M.gold,0,5.4,0);},sx*20,12.2,6);
   group(()=>figure(3.1,M.marble,true),sx*19.8,42.0,0);
 }
},0,.5,-125);GATE.scale.setScalar(.80);
// Architectural reliefs on the triumphal arch: marble and gold, real 3D projected onto its façades.
const ornamentalGold=mat("#D9AD59");
const ornamentalRelief=mat("#BB8E79");
for(const xx of [-15.5,15.5])for(const y of [8,15,22])group(()=>{
  box(4.8,6.1,.3,M.stone,0,0,0);
  box(4.3,5.6,.36,M.marble,0,.0,.05);
  for(let j=0;j<4;j++)box(3.7,.12,.04,ornamentalGold,0,-2.2+j*1.4,.26);
  figure(3.9,M.ivory,true);
},xx,y,-119.9);
for(let k=-7;k<=7;k++)group(()=>{
  box(2.15,1.38,.25,ornamentalRelief,0,0,0);
  tor(.52,.085,ornamentalGold,0,0,.17,0);
  sph(.16,M.ivory,0,0,.25);
},k*2.5,33.0,-120);
// Bronze chariot monument above the arch, and a laurel crown relief.
group(()=>{
 box(10,.8,2.6,M.bronze,0,0,0);
 for(const x of [-2,2])tor(1.15,.17,M.gold,x,0,1.45,0);
 group(()=>figure(4.0,M.bronze,true),0,.8,0);
 for(const x of [-6,-4,4,6])group(()=>{
  sph(.9,M.bronze,0,1.2,0);con(.4,1.5,M.bronze,0,2.1,-.7);
  for(const xx of [-.5,.5])cyl(.1,.1,1.15,M.bronze,xx,.32,.55,6);
 },x,-.15,0);
},0,36.6,-124);
// Circular victory temple at left; elliptical colosseum at right.
group(()=>{
 cyl(14,14,1.8,M.stone,0,.9,0,44);
 for(let i=0;i<14;i++){let a=i*Math.PI*2/14;group(()=>column(15,.72),Math.sin(a)*12.2,1.8,Math.cos(a)*12.2);}
 cyl(15,15,1.3,M.marble,0,17.2,0,48);
 con(17,7,M.rose,0,21.6,0);con(2,3,M.gold,0,26,0);
},-76,15,-183);
group(()=>{
 for(let level=0;level<3;level++){
  let y=level*7.8;
  for(let i=0;i<40;i++){
   let a=i*2*Math.PI/40;
   box(2.5,7.1,3,M.ivory,Math.sin(a)*27,y+3.65,Math.cos(a)*27,a);
  }
  tor(27.7,.52,M.marble,0,y+7.25,0);
  tor(28,.17,M.gold,0,y+7.73,0);
 }
 cyl(29,29,1.2,M.stone,0,24.7,0,48);
 for(let k=0;k<16;k++){let a=k*Math.PI/8;
  box(.15,3.1,.15,M.gold,Math.sin(a)*29,26.2,Math.cos(a)*29);
 }
},87,15,-182);
// Pedestal figurines are original low-polygon sculptural people.
function figure(h,robe,hero=false){
 const pts=[[.08,0],[h*.21,h*.22],[h*.24,h*.40],[h*.18,h*.66],[h*.12,h*.78],[h*.1,h*.85]];
 lathe(pts,robe,0,0,0);sph(h*.095,M.ivory,0,h*.91,0);
 for(const sx of [-1,1])cyl(.065*h,.065*h,h*.30,robe,sx*h*.17,h*.52,0,8);
 if(hero)con(.16*h,.2*h,M.gold,0,h*1.04,0);
}
// Stone fountain and sculpted sea deity.
const WATER=new THREE.MeshBasicMaterial({color:0xA5D8E3,transparent:true,opacity:.48,depthWrite:false,side:THREE.DoubleSide});
group(()=>{
 cyl(10.6,10.6,1.2,M.marble,0,.6,0);
 cyl(10.1,10.1,.18,M.gold,0,1.3,0);
 cyl(9.7,9.7,.07,M.ivory,0,1.42,0);
 tor(10,.32,M.stone,0,1.54,0);
 cyl(5.1,5.1,1.6,M.ivory,0,2.2,0);
 tor(5,.21,M.gold,0,3.3,0);
 cyl(4.7,4.7,.07,M.ivory,0,3.28,0);
 cyl(2.3,2.3,1.3,M.stone,0,4.0,0);
 figure(4.3,M.bronze,true);
 cyl(.11,.14,6.1,M.gold,1.45,6.5,0,9);
 for(const off of [-.38,0,.38])con(.18,1.6,M.gold,1.45+off,9.9,0);
 for(let i=0;i<16;i++){
   let a=i*Math.PI/8,x=Math.sin(a)*8.3,z=Math.cos(a)*8.3;
   sph(.50,M.gold,x,1.65,z);
   const o=tube([[x,1.9,z],[x*.89,4.5,z*.89],[x*.6,2.0,z*.6]],.085,WATER,18);o.userData.noMerge=true;NOINK.push(o);
 }
},0,.2,-59);
// Large philosopher and armed goddess statues in the foreground.
for(const sx of [-1,1])group(()=>{
 box(10,4.0,8,M.ivory,0,2.0,0);
 for(let k=-2;k<=2;k++){box(.85,2.4,.12,M.rose,k*1.8,1.55,4.1);sph(.28,M.gold,k*1.8,2.4,4.18);}
 group(()=>{
  figure(8.0,M.marble,true);
  if(sx>0){cyl(.13,.15,10,M.gold,3,6.6,0,10);tor(2.5,.16,M.gold,-2.5,6.0,0,0);}
  else box(1.5,.18,.7,M.gold,2,7.2,.3);
 },0,4.0,0);
},sx*40,0,21);
// Banner-bearing cypress groves, urns, roadside small temples.
function cypress(x,z,h=12){group(()=>{
 cyl(.20,.3,h*.64,M.stone,0,h*.33,0,8);
 for(let j=0;j<5;j++)con(h*(.145-j*.012),h*.27,M.leaf,0,h*(.25+j*.155),0);
},x,0,z);}
for(const sx of [-1,1])for(let k=0;k<20;k++){
 let z=25-k*10.7;cypress(sx*(54+(k%3)*2),z,11+k%4);
 if(k%2===0)cypress(sx*(69+(k%3)*2),z-6,9+k%3);
}
const bannerTex=(()=>{const c=document.createElement("canvas");c.width=256;c.height=512;const g=c.getContext("2d");
 g.fillStyle="#922D43";g.fillRect(0,0,256,512);g.strokeStyle="#EDCD76";g.lineWidth=13;g.strokeRect(22,25,212,460);
 for(let k=0;k<24;k++){let a=k*Math.PI/12;g.fillStyle="#F3D18B";g.beginPath();g.ellipse(128+63*Math.cos(a),220+90*Math.sin(a),15,6,a,0,7);g.fill();}
 g.fillStyle="#EBD28E";g.textAlign="center";g.font="bold 46px Georgia";g.fillText("AETERNA",128,382);
 let t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
for(const sx of [-1,1])for(let i=0;i<12;i++){
 let z=19-i*16;const b=new THREE.Mesh(new THREE.PlaneGeometry(2.65,5.45),new THREE.MeshBasicMaterial({map:bannerTex,side:THREE.DoubleSide}));
 b.position.set(sx*25.5,12.2,z);scene.add(b);GLOW.push(b);
 box(3,.12,.14,M.gold,sx*25.5,15,z);
}
// Market awnings and vessels are physically separated, deep and readable after dolly move.
const awning=(()=>{const c=document.createElement("canvas");c.width=256;c.height=256;const g=c.getContext("2d");
 for(let x=0;x<256;x+=32){g.fillStyle=(x/32)%2?"#A33347":"#F0D1A1";g.fillRect(x,0,32,256);}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshToonMaterial({map:t,gradientMap:ramp});})();
for(const sx of [-1,1])for(let i=0;i<8;i++)group(()=>{
 for(const xx of [-3,3])for(const zz of [-2.6,2.6])cyl(.12,.12,4,M.stone,xx,2,zz,7);
 box(6.5,.13,5.6,awning,0,4,0);
 box(6.4,1.2,2.1,M.stone,0,.7,1.9);
 box(6.4,.15,2.2,M.marble,0,1.25,1.9);
 for(let q=0;q<20;q++)sph(.16+(q%4)*.05,q%4===0?M.olive:M.wine,-2.8+(q%10)*.57,1.55,1.3+Math.floor(q/10)*.7);
 for(const a of [-2.6,2.6])lathe([[0,0],[.4,.25],[.62,.8],[.5,1.5],[.30,1.7]],M.terra,a,.0,3.4);
},sx*27,0,11-i*18,sx>0?Math.PI:0);
// Visitors occupy several independent z planes.
const robes=[M.wine,M.navy,M.ivory,M.rose,M.marble,M.stone];
for(let i=0;i<115;i++){
 let x=(rnd()-.5)*37,z=18-rnd()*132;
 if(z<-48&&z>-72&&Math.abs(x)<13)x+=(x>0?13:-13);
 if(z<-92&&z>-115&&Math.abs(x)<14)x+=(x>0?15:-15);
 const color=robes[Math.floor(rnd()*robes.length)];
 const g=group(()=>figure(1.5+rnd()*.4,color),x,0,z,rnd()*6.28);
 g.userData.noMerge=true;WALKERS.push({g,x,z,k:rnd()*6.28});
}
// Golden ritual braziers with animated flames.
const FLAME=[];
for(const sx of [-1,1])for(let i=0;i<7;i++)group(()=>{
 cyl(.16,.25,2.5,M.gold,0,1.25,0,10);
 lathe([[.34,0],[.8,.14],[1.22,.45],[1.45,.86],[1.30,1.02]],M.bronze,0,2.2,0);
 tor(1.34,.13,M.gold,0,3.2,0);
 for(let k=0;k<5;k++){let a=k*2*Math.PI/5;let q=con(.22,1.2,M.flame,Math.sin(a)*.55,3.7,Math.cos(a)*.55);q.userData.noMerge=true;FLAME.push(q);}
},sx*29,0,21-i*27);
// 4-pass lighting; original Simcraft shaders preserved.
const amb=new THREE.AmbientLight("#E9C3A1",1.12);scene.add(amb);
const sun=new THREE.DirectionalLight("#FFE9C4",1.28);
sun.position.set(-85,120,50);sun.target.position.set(0,18,-98);scene.add(sun,sun.target);
sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
Object.assign(sun.shadow.camera,{left:-160,right:160,top:140,bottom:-140,near:1,far:475});
sun.shadow.bias=-.0008;sun.shadow.normalBias=.06;
TICK.push(ms=>{
 const t=ms/10000*Math.PI*2;
 for(const f of FLAME)f.scale.y=1+.12*Math.sin(t*5+f.position.x);
 for(const p of WALKERS)p.g.position.z=p.z+.17*Math.sin(t+p.k);
});
