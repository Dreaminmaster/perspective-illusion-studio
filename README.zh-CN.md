<div align="center">

<img src="assets/hero.svg" width="100%" alt="Perspective Illusion Studio — 三维透视错觉电影制作技能" />

<br/>

<strong>同一个三维世界，两种截然不同的空间感。</strong>

<br/><br/>

一套可复用的 Three.js 视频制作技能。  
从近乎平面的长焦构图，到镜头推进后突然展开的立体世界。

<br/><br/>

<a href="#作品集">作品集</a> &nbsp;·&nbsp;
<a href="#透视错觉是怎样实现的">镜头原理</a> &nbsp;·&nbsp;
<a href="#开始使用">运行方法</a> &nbsp;·&nbsp;
<a href="SKILL.md">技能原文</a> &nbsp;·&nbsp;
<a href="README.md">English</a>

<br/><br/>

<a href="https://github.com/Dreaminmaster/perspective-illusion-studio/actions/workflows/verify.yml"><img src="https://github.com/Dreaminmaster/perspective-illusion-studio/actions/workflows/verify.yml/badge.svg" alt="自动检查状态" /></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-8da7cb?style=flat&labelColor=172139" alt="MIT 开源许可" /></a>
<a href="https://threejs.org/"><img src="https://img.shields.io/badge/rendering-Three.js-8da7cb?style=flat&labelColor=172139" alt="Three.js 三维引擎" /></a>

</div>

---

## 作品集

**三个不同的世界，共用一套真实三维摄影机方法。** 每部短片都保留了场景源文件和渲染脚本，不是把一张图片放大缩小。

<table>
<tr>
<td width="33%" valign="top">
  <a href="scenes/aeterna-forum/aeterna_final.mp4"><img src="scenes/aeterna-forum/poster.jpg" width="100%" alt="AETERNA 永恒之城：虚构的古希腊和古罗马帝国广场" /></a>
  <br/><br/>
  <sub>01 &nbsp;/&nbsp; 古典幻想</sub>
  <h3>AETERNA</h3>
  <p>架空的希腊—罗马帝国广场。大理石神庙、凯旋门、喷泉和黄昏中的层层柱廊。</p>
  <p><a href="scenes/aeterna-forum/aeterna_final.mp4"><strong>观看视频</strong></a> &nbsp;·&nbsp; <a href="scenes/aeterna-forum/">三维工程</a></p>
</td>
<td width="33%" valign="top">
  <a href="scenes/night-city-2077/night_city_2077.mp4"><img src="scenes/night-city-2077/poster.jpg" width="100%" alt="Night City 2077：原创的霓虹未来都市" /></a>
  <br/><br/>
  <sub>02 &nbsp;/&nbsp; 未来都市</sub>
  <h3>NIGHT CITY 2077</h3>
  <p>霓虹高楼、全息广告、悬浮交通与湿润街道，以赛博朋克美学为灵感。</p>
  <p><a href="scenes/night-city-2077/night_city_2077.mp4"><strong>观看视频</strong></a> &nbsp;·&nbsp; <a href="scenes/night-city-2077/">三维工程</a></p>
</td>
<td width="33%" valign="top">
  <a href="examples/shibuya-demo.mp4"><img src="assets/stills/02-reveal.jpg" width="100%" alt="Shibuya Scramble：风格化的东京涩谷十字路口" /></a>
  <br/><br/>
  <sub>03 &nbsp;/&nbsp; 城市街景</sub>
  <h3>SHIBUYA SCRAMBLE</h3>
  <p>合作的起点：雨夜东京风格街道、斑马线、商铺招牌、人群和立体建筑。</p>
  <p><a href="examples/shibuya-demo.mp4"><strong>观看视频</strong></a> &nbsp;·&nbsp; <a href="scene.html">三维场景</a></p>
</td>
</tr>
</table>

<sub>三个示例均为约 10 秒、1280 × 720、15 FPS 原生三维渲染。所有街景均作了艺术化处理，不代表对真实地点或游戏场景的精确复原。</sub>

---

## 透视错觉是怎样实现的

**不是对成品图片做变焦，而是先创造真实的三维空间。** 当镜头使用极窄的长焦视角时，建筑、人群和道路的前后距离被视觉压缩；随后镜头向前移动、视角逐渐扩大，同一批三维物体便显现出空间纵深。

<table>
<tr>
<td width="33%"><img src="assets/stills/01-flat.jpg" width="100%" alt="2 度长焦下的压缩街景" /></td>
<td width="33%"><img src="assets/stills/02-reveal.jpg" width="100%" alt="广角镜头展开后显现街道纵深" /></td>
<td width="33%"><img src="assets/stills/03-corner.jpg" width="100%" alt="侧面镜头揭示更多空间关系" /></td>
</tr>
<tr>
<td><strong>01 — 压缩</strong><br/><sub>约 2° 超长焦。多个深度层次看起来接近同一个平面。</sub></td>
<td><strong>02 — 展开</strong><br/><sub>约 74°–84° 广角。镜头推进时保持主要构图，产生强烈的纵深变化。</sub></td>
<td><strong>03 — 换角度</strong><br/><sub>再从侧向观察，让原来难以察觉的空间关系重新出现。</sub></td>
</tr>
</table>

<div align="center">
  <a href="scenes/aeterna-forum/aeterna_final.mp4"><img src="scenes/aeterna-forum/preview.gif" width="76%" alt="AETERNA 古典广场：真实 Three.js 透视错觉动态预览" /></a>
  <br/>
  <sub>精选动态演示：<a href="scenes/aeterna-forum/aeterna_final.mp4">AETERNA 有声视频</a> · <a href="scenes/aeterna-forum/storyboard.jpg">查看镜头对比图</a></sub>
</div>

<br/>

摄影机与对焦平面之间的关系可以写成：

`D = (W / 2) / tan(FOV / 2)`

其中 `W` 是焦点平面上被画面包含的宽度，`FOV` 是水平视角，`D` 是摄影机到该平面的距离。Skill 通过控制镜头运动和画面构图，让真实物体之间的距离逐渐显现。详细原理见 [镜头设计说明](references/camera-design.md)。

## 一套可以反复使用的制作流程

<table>
<tr>
<td width="25%" valign="top"><strong>01 / 建模</strong><br/><sub>在 Three.js 中创建可编辑的建筑、人物、道具和材质。</sub></td>
<td width="25%" valign="top"><strong>02 / 镜头</strong><br/><sub>设计长焦压缩、广角展开及侧向镜头的运动轨迹。</sub></td>
<td width="25%" valign="top"><strong>03 / 渲染</strong><br/><sub>结合色彩、法线、深度和阴影生成风格化三维画面。</sub></td>
<td width="25%" valign="top"><strong>04 / 检查</strong><br/><sub>验证关键画面、运动连续性、首尾衔接和视频参数。</sub></td>
</tr>
</table>

我们的渲染方式输出**真实的三维渲染帧**，不靠运动插帧猜测中间画面，因此能避免早期版本出现的大范围拖影和物体变形。不过低原生帧率与有限的抗锯齿采样仍可能造成细线闪烁。

---

## 开始使用

可以选择直接探索现有的涩谷三维世界，也可以使用 Skill 制作新的作品。所有源文件都在仓库中，**不需要额外的云电脑或收费视频生成服务**。

### 方式 A — 在 Mac 上探索涩谷

**[下载完整仓库 ZIP](https://github.com/Dreaminmaster/perspective-illusion-studio/archive/refs/heads/main.zip)** · [查看交互式三维页面](explore.html)

解压后，双击文件夹中的 **`start-mac.command`**。它会检查 Node.js、首次安装项目依赖，再打开本地浏览器中的三维街景。

<sub>操作方式：拖动旋转 · 右键拖动平移 · 滚轮缩放 · W/A/S/D 移动 · Q/E 调整高度 · F 播放原来的透视镜头 · R 重置。需要 Node.js 22+，推荐 Chrome。关闭启动终端即可停止本地服务。</sub>

### 方式 B — 读取 Skill 并渲染视频

~~~bash
git clone https://github.com/Dreaminmaster/perspective-illusion-studio.git
cd perspective-illusion-studio
npm ci
npm test

# 进入本地交互式三维场景
npm run explore

# 或者将镜头轨迹渲染成 MP4
npm run preview
npm run render:crisp
~~~

**运行环境：** Node.js 22+、Chrome / Chromium、FFmpeg，以及支持 WebGL 的电脑。若不在 Linux 环境中，需将 `CHROME_BIN` 设置为 Chrome 可执行文件的路径。高质量渲染更适合使用具备硬件图形加速的设备。

需要让编程助手制作新的场景时，先给它阅读 **[SKILL.md](SKILL.md)**。

> **示例需求：** “按照 Perspective Illusion Studio Skill 制作一段 10 秒的威尼斯运河三维短片。开头使用约 2° 长焦压缩街道，随后通过真实的镜头推进展开纵深，再从侧向展示一次。先提供关键帧，再渲染完整视频，并保留 Three.js 源码。”

### 工程导航

| 文件 | 用途 |
|:--|:--|
| [`SKILL.md`](SKILL.md) | AI 编程助手使用的完整制作方法 |
| [`scene.html`](scene.html)、[`render.mjs`](render.mjs) | 涩谷三维场景和原生帧渲染器 |
| [`explore.html`](explore.html) | 可以自由操控镜头的本地三维查看器 |
| [`scenes/`](scenes/) | Night City 和 AETERNA 的视频、源码及音轨 |
| [`references/`](references/) | 摄影机原理和质量检查流程 |
| [`scripts/verify-skill.mjs`](scripts/verify-skill.mjs) | 工程自动检查脚本 |

<details>
<summary><strong>技术说明与已知限制</strong></summary>

- 三部示例是 **720p、15 FPS** 的三维作品，不是 4K 或 60 FPS 成品。
- 真实三维渲染减少了补帧造成的变形，但不代表所有镜头都完全没有细线闪烁。
- **涩谷场景已支持交互式自由探索**；另外两部是可编辑的 Three.js 工程，还没有独立的自由漫游页面。
- 这是给兼容的 AI 编程助手使用的技能文件集合，不会因为收藏仓库就自动成为 ChatGPT 的永久内置技能。
- 赛博朋克城市与其他世界均为独立的风格化创作，不宣称使用游戏官方素材。

</details>

---

## 项目来源与致谢

**原始技术：** [Simcraft / perspective-illusion](https://github.com/dotslashsimran/simcraft/tree/main/skills/video/perspective-illusion)，作者 **Simran Sachdeva**（© 2026，MIT）。本项目的 Three.js 基础模板、相机方法以及多遍渲染工具建立在其开放源代码之上。

**合作改进：** [Dreaminmaster](https://github.com/Dreaminmaster) 与 ChatGPT 从涩谷项目开始，逐步改进镜头变化、清晰渲染、可复用的 Skill 说明，并拓展出其他原创三维场景。

原作者署名及许可证保留于 [LICENSE](LICENSE) 和 [CREDITS.md](CREDITS.md)。

<div align="center">

<sub>三个世界，一套摄影机语言。</sub>

</div>
