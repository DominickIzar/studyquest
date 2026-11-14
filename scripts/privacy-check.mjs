// Best-effort public-source privacy lint. This is not a substitute for manual review.
import fs from "node:fs";
import path from "node:path";
const roots=["README.md","index.html","manifest.webmanifest","package.json","sw.js","js","css","assets","tests"];
const extensions=new Set([".js",".mjs",".css",".html",".md",".json",".webmanifest",".svg"]);
const sources=[];
function walk(p){if(!fs.existsSync(p))return;const stat=fs.statSync(p);if(stat.isDirectory()){for(const x of fs.readdirSync(p))walk(path.join(p,x));return}if(extensions.has(path.extname(p))||p.endsWith(".webmanifest"))sources.push(p)}
roots.forEach(walk);
const rules=[
 ["Email address",/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i],
 ["Private key",/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/i],
 ["Potential API credential",/(?:api[_-]?key|access[_-]?token|client[_-]?secret|password)\s*[:=]\s*['"]?[A-Za-z0-9_\-]{14,}/i],
 ["Brazilian personal ID",/\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/],
 ["Brazilian company ID",/\b\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}\b/]
];
let failed=0;
for(const file of sources){const src=fs.readFileSync(file,"utf8");for(const [label,regex] of rules){if(regex.test(src)){console.error("Review required:",label,"in",file);failed++}}}
if(failed){console.error("Privacy review failed. Remove sensitive content before publishing.");process.exit(1)}
console.log("Basic privacy lint passed. Manual review is still required.");
