# Perspective Illusion Studio｜透视错觉专属技能

这是基于 [Simcraft Perspective Illusion](https://github.com/dotslashsimran/simcraft/tree/main/skills/video/perspective-illusion) 制作的可复用技能包。原作者为 Simran Sachdeva，采用 MIT 许可证。我们在涩谷十字路口项目中进一步调整了镜头、素材和渲染流程。

## 功能

- 将远景压缩为近似平面插画，随后通过真实的 Three.js 相机移动展开空间。
- 主要变化：**2° 长焦 → 78°/84° 广角**；另有 **30° 侧向视角，3° → 58° 展开**。
- 支持夜景、广告屏、日文招牌、行人、交通工具、潮湿道路等可编辑元素。
- 明确区分快速预览和高质量渲染，避免用运动插帧制造模糊与重影。
- 含完整演示视频、12 张素材、GitHub Actions 自动文件检查。

## 使用方法

1. 下载仓库，打开根目录的 [SKILL.md](SKILL.md) 供支持技能文件的编程助手读取。
2. 电脑准备 Node.js 22 或更新版本、Chrome 和 ffmpeg。
3. 执行：

```bash
npm ci
npm test
npm run preview
```

4. 高质量本机渲染：`npm run render:crisp`（建议使用具备硬件图形加速的电脑）。

**注意：** 示例视频是 **720p、15 FPS、10 秒**，不是高帧率成品。它已避免运动插帧拖影，但部分细线仍可能闪烁。真实的 24–30 FPS 输出要重新进行三维渲染，不应靠补帧冒充。

## 示例命令

将项目提供给编程助手并说明：

> 请阅读这个仓库的 SKILL.md，沿用其 Three.js 真实透视镜头、材质和清晰渲染流程，制作一段新的 10 秒循环影片：场景为东京夜晚街道，前 2 秒看起来像一张画，随后透视明显展开，最后回到初始画面。先给我三个关键时间点的截图，确认镜头变化后，再渲染视频。保留源文件和完整许可信息。

## 文件

- `SKILL.md`：完整技能工作流程。
- `scene.html`：可编辑的 Three.js 三维场景。
- `render.mjs`：不使用时间补帧的清晰渲染。
- `render_fast.mjs`：原技能演进的多重采样渲染。
- `cutouts/`：12 张角色与广告素材。
- `examples/`：视频及关键镜头对比图。
- `references/`：镜头设计和质量检查。
- `CREDITS.md`、`LICENSE`：来源说明及许可证。

这个 ZIP 不是自动安装到 ChatGPT 账号中的插件；它是一套可直接放入 GitHub，并提供给支持 SKILL.md 的助手使用的技能工程。

## 发布到 GitHub（只会发布到指定账户）

已提供一份防误操作脚本。先安装并登录 GitHub CLI（`gh auth login`），然后在项目根目录运行：

```bash
bash scripts/publish-github.sh ScottH1122
```

脚本会先核对当前登录账户是否确实为 `ScottH1122`，不一致就拒绝发布；目标仓库已存在时也不会覆盖。公开仓库将命名为 `perspective-illusion-studio`。只有在你本人已经登录、允许该账号创建仓库时才会执行发布。
