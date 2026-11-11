#!/bin/zsh
# Perspective Illusion Studio — one-click Mac launcher
set -e
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "${0:A:h}"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  SHIBUYA · 3D EXPLORER / 三维自由探索"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "没有找到 Node.js。请先安装 Node.js（推荐 22 或更高版本）："
  echo "https://nodejs.org/en/download"
  open "https://nodejs.org/en/download" || true
  echo ""
  echo "安装完成后，再双击此文件启动。"
  echo "按回车关闭窗口。"
  read -r REPLY
  exit 1
fi

if [[ ! -f "node_modules/three/build/three.module.js" ]]; then
  echo "首次启动：正在安装 Three.js 等项目依赖..."
  npm ci --no-fund --no-audit
fi

echo "启动本地网页服务器（仅本机访问）..."
node scripts/serve.mjs &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT INT TERM HUP
sleep 2

URL="http://127.0.0.1:8765/explore.html?scale=.40"
if [[ -d "/Applications/Google Chrome.app" ]]; then
  open -a "Google Chrome" "$URL"
else
  open "$URL"
fi
echo ""
echo "已在浏览器中打开：$URL"
echo "鼠标拖动旋转，滚轮缩放，W/A/S/D 移动；按 F 播放原来的透视镜头。"
echo "关闭这个终端窗口或按 Ctrl+C，可以结束本地服务器。"
wait "$SERVER_PID"
