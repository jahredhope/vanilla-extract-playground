// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

process.env.NODE_ENV = "production";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const { render } = await import("./dist/server/entry-server.js");

async function run() {
  const template = await fs.readFile(
    toAbsolute("dist/client/index.html"),
    "utf-8"
  );
  const { appHtml, headerHtml } = await render();
  const html = template
    .replace("<!--static-html-->", headerHtml)
    .replace(`<!--app-html-->`, appHtml)
    .replace(`<!--app-html-orig-->`, appHtml);

  const filePath = `dist/client/index.html`;
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  // console.log("Prerendering", { filePath, url, appHtml });
  await fs.writeFile(toAbsolute(filePath), html);
  console.log("pre-rendered:", filePath);
}

run();
