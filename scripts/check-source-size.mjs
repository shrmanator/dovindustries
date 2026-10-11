import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
async function check(directory) {
  const failures = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) failures.push(...await check(path));
    else if (/\.(tsx?|css|mjs)$/.test(entry.name)) {
      const lines = (await readFile(path, "utf8")).trimEnd().split(/\r?\n/).length;
      if (lines > 300) failures.push(path + ": " + lines + " lines");
    }
  }
  return failures;
}
const failures = [...await check("src"), ...await check("scripts")];
if (failures.length) { console.error(failures.join("\n")); process.exitCode = 1; }
else console.log("All authored source files are below 300 lines.");
