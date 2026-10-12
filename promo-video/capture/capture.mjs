// Captures the real AR Digital Solutions site for the promo video.
// Usage: node capture/capture.mjs <built site dir> <output dir>
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { chromium } from "playwright-core";

const [siteDir, outDir] = process.argv.slice(2);
if (!siteDir || !outDir) {
  console.error("usage: node capture/capture.mjs <built site dir> <output dir>");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

const TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
};

// Static server with SPA fallback so client routes resolve to index.html
const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(siteDir, path);
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(siteDir, "index.html");
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH ?? "/opt/pw-browsers/chromium",
});
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 });

const wait = (ms) => page.waitForTimeout(ms);
const shot = async (name) => {
  await page.screenshot({ path: join(outDir, `${name}.png`) });
  console.log(name);
};
// Hides the fixed navbar so section shots read cleanly
const nav = (visible) =>
  page.evaluate((v) => {
    const header = document.querySelector("header");
    if (header) header.style.visibility = v ? "visible" : "hidden";
  }, visible);
// Scrolls a section to the top of the viewport and lets its reveal animations play
const section = async (text, offset = 0) => {
  await page.evaluate(
    ([t, o]) => {
      const el = [...document.querySelectorAll("section")].find((s) => s.textContent.includes(t));
      window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + o);
    },
    [text, offset],
  );
  await wait(2600);
};

await page.goto(`${base}/`, { waitUntil: "networkidle" });
await wait(3500);
await shot("home-hero");

await section("What we do", -40);
await shot("home-services");

await section("Sellix POS", -40);
await shot("home-sellix");

await section("Who we help", -40);
await shot("home-industries");

await section("How we work", -40);
await shot("home-process");

await section("Why us", -40);
await shot("home-why");

await section("Let's talk", -120);
await shot("home-cta");

// Full-length homepage for a scrolling shot
await page.evaluate(() => window.scrollTo(0, 0));
await nav(false);
await page.screenshot({ path: join(outDir, "home-full.png"), fullPage: true });
await nav(true);
console.log("home-full");

await page.goto(`${base}/projects`, { waitUntil: "networkidle" });
await wait(3000);
await shot("projects-top");
await page.evaluate(() => window.scrollTo(0, 420));
await wait(1500);
await shot("projects-grid");
// Hovering a card brings its image back to colour
await page.hover("article >> nth=0");
await wait(1200);
await shot("projects-grid-hover");

await page.goto(`${base}/services`, { waitUntil: "networkidle" });
await wait(3000);
await shot("services-top");
await page.evaluate(() => window.scrollTo(0, 560));
await wait(1800);
await shot("services-list");

await page.goto(`${base}/contact`, { waitUntil: "networkidle" });
await wait(3000);
await shot("contact");

await browser.close();
server.close();
