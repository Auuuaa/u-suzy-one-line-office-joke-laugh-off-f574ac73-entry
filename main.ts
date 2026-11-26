// One-Line Office Joke Laugh-Off: the résumé multitasking claim, punctured.
// The line goes to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CLAIM = "I listed 'excellent multitasker' on my résumé";
const CONFESSION = "because I can cry and answer emails at the same time.";

// One sentence, one line: the claim sounds like a strength until the
// confession reveals what the multitasking really looks like.
function assemble(): string {
  return [CLAIM, CONFESSION].join(" ");
}

function checkLength(text: string): void {
  const n = text.length;
  if (n < 1 || n > 200) {
    throw new Error(`entry is ${n} chars; the laugh-off gate is 1-200`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const line = assemble();
  checkLength(line);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), line, "utf8");
}

main();
