import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";

const root = resolve(import.meta.dirname, "..");
const port = Number(process.env.PORT || 8765);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".css": "text/css; charset=utf-8"
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", "http://127.0.0.1");
    const raw = decodeURIComponent(url.pathname);
    if (raw === "/" || raw === "/index.html") {
      res.writeHead(302, { location: "/explore.html?scale=.40" });
      return res.end();
    }
    const file = resolve(root, "." + raw);
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403); return res.end("Forbidden");
    }
    const info = await stat(file);
    if (!info.isFile()) {
      res.writeHead(404); return res.end("Not found");
    }
    const data = await readFile(file);
    res.writeHead(200, { "content-type": types[extname(file).toLowerCase()] || "application/octet-stream", "cache-control": "no-cache" });
    res.end(data);
  } catch (error) {
    const notFound = error?.code === "ENOENT";
    res.writeHead(notFound ? 404 : 400, { "content-type": "text/plain; charset=utf-8" });
    res.end(notFound ? "File not found" : "Bad request");
  }
});
server.listen(port, "127.0.0.1", () => {
  console.log("Shibuya 3D Explorer: http://127.0.0.1:" + port + "/explore.html?scale=.40");
  console.log("Only your own computer can access this local server. Ctrl+C to stop.");
});
