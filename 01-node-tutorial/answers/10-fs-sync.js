// Destructured way of doing fs.readFileSync & fs.writeFileSync

const { readFileSync, writeFileSync, appendFileSync } = require("fs");

writeFileSync("./temporary/fileA.txt", "This is line 1. ", { flag: "a" });

appendFileSync("./temporary/fileA.txt", "This is line 2. ", { flag: "a" });

appendFileSync("./temporary/fileA.txt", "This is line 3.");

const readWriteFile = readFileSync("./temporary/fileA.txt", "utf8");

console.log(readWriteFile);
