// news-image-20261122 v5 entrypoint: copy the entry image to /output/entry.png
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
const srcSize = statSync(src).size;
const outSize = statSync(join(outDir, "entry.png")).size;
if (srcSize !== outSize) throw new Error(`size mismatch: source ${srcSize} vs output ${outSize}`);
console.log(`entry.png copied to /output/entry.png (${outSize} bytes, verified)`);
