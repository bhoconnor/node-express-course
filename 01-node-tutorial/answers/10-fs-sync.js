// Destructured way of doing fs.readFileSync & fs.writeFileSync
// Interestingly uses require with a module/file that is NOT written by us in this assignment, which is the main way it was done with all the other uses of require
const { readFileSync, writeFileSync, appendFileSync } = require("fs");

writeFileSync("./temporary/fileA.txt", "This is line 1. ", { flag: "a" });

appendFileSync("./temporary/fileA.txt", "This is line 2. ", { flag: "a" });

appendFileSync("./temporary/fileA.txt", "This is line 3. ");

const readWriteFile = readFileSync("./temporary/fileA.txt", "utf8");

console.log(readWriteFile);
