import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";

const repo = process.cwd();
const study = path.join(repo, "docs", "design-proposals");
const allowedArt = new Set([
  "bear-mark-clean.webp", "art-bear-paw-edit.webp", "art-sefer-exchange-v3.webp", "art-vr-stepping.webp",
]);
const allowedStudy = new Set([
  "index.html", "review.css", "compositions.css", "content.mjs", "fragments.mjs", "layouts.mjs", "review.mjs", "dm-sans.woff2",
]);
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".mjs": "text/javascript", ".webp": "image/webp", ".woff2": "font/woff2" };

const server = http.createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const name = path.posix.basename(pathname);
  let file;
  if (name === "dm-sans.woff2") file = path.join(repo, ".next", "static", "media", "5c285b27cdda1fe8-s.p.a62025f2.woff2");
  else if (pathname === "/") file = path.join(study, "index.html");
  else if (pathname.startsWith("/docs/design-proposals/") && allowedStudy.has(name)) file = path.join(study, name);
  else if (pathname.startsWith("/public/images/") && allowedArt.has(name)) file = path.join(repo, "public", "images", name);
  else if (allowedStudy.has(name) && pathname === `/${name}`) file = path.join(study, name);
  if (!file) { response.writeHead(404).end("Not found"); return; }
  try {
    const bytes = await readFile(file);
    response.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    response.end(bytes);
  } catch { response.writeHead(404).end("Not found"); }
});
server.listen(3052, "127.0.0.1", () => console.log("Composition review: http://localhost:3052/docs/design-proposals/index.html"));
