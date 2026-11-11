# AETERNA｜永恒帝国广场

这是一部使用 Perspective Illusion Studio Skill 制作的原创 Three.js 三维透视错觉短片。

场景是完全虚构的希腊—罗马帝国广场：巨型凯旋门、山顶神庙、拱廊、圆形圣殿、古代竞技场、喷泉、雕像、集市、陶罐、火炬、古典人群与夕阳。

## 镜头原理

- 2° 超长焦，将不同真实纵深的建筑压缩成近似平面。
- 74°–84° 广角，摄像机同步向前，展示真实空间间距。
- 26° 侧向转角，然后 3° → 62° 第二次展开。
- 回到初始视角构成 10 秒循环。
- 使用真实 Three.js 几何体和四遍渲染，不是单张图片推拉。

## 压缩包内容

- aeterna_final.mp4：10 秒、有原创古典配乐的成品。
- aeterna_native_silent.mp4：无声原生三维视频。
- scene.html：完整的可编辑三维场景。
- roman_geometry.js：建筑、喷泉、人物、柱廊、市场及大理石地面模型。
- simcraft_base.html、assemble.py：可重复生成场景的基础文件与脚本。
- render.mjs：原生帧渲染脚本。
- soundtrack.py、aeterna_original_score.wav：原创音乐与合成器源代码。
- preview.gif、poster.jpg、storyboard.jpg：预览、封面、关键帧。
- LICENSE、CREDITS.md、SIMCRAFT_ORIGINAL_SKILL.md：原作者署名和许可。

## 在 Mac 上观看与重渲染

只想看视频，直接双击 MP4，不必安装软件。

重渲染需要 Node.js 22+、Chrome 和 FFmpeg：

    npm ci
    CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" node render.mjs scene.html my_render.mp4 --preview --fps=15 --from=0 --to=10 --step=500 --mink=1

目前示例实际为 1280×720、15 帧每秒、10 秒。没有使用运动插帧；使用更高性能的 GPU 可以提高分辨率与采样质量。

## 版权与来源

原 Simcraft perspective-illusion 技能和核心渲染技术：Simran Sachdeva，MIT，详见 LICENSE。该技能改进由 Dreaminmaster 与 ChatGPT 共同推进；AETERNA 古典帝国广场与音乐为这次原创制作。参考图仅作为美术方向，非直接进行平面缩放动画。
