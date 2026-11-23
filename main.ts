import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });

const writeEntry = (value: string) => {
  if (Buffer.byteLength(value, "utf8") !== value.length) {
    throw new Error("Entry must be single-byte ASCII");
  }
  writeFileSync(entryPath, value, { encoding: "utf8" });
};

writeEntry("B");
writeEntry("A");
