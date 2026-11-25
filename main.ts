// The Agent's Uh-Oh — make.fun bounty u-danu-the-agent-s-uh-oh-4c0911e4
// Writes exactly one word to /output/entry.txt: the sound of an agent
// that has no idea what to do. No trailing newline (tie-breaks favour
// fewer bytes), no network, no dependencies, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "hallucinating";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
