// Destructured way of doing fs.readFileSync & fs.writeFileSync
// Interestingly uses require with a module/file that is NOT written by us in this assignment, which is the main way it was done with all the other uses of require
const { readFileSync, writeFileSync, appendFileSync } = require("fs");

// `appendFileSync` below appends each subsequent line onto the 1st line. Then `flag: "a"` appends the same 3 lines below again to previous results when run this module.
writeFileSync("./temporary/fileA.txt", "This is line 1. ", { flag: "a" });

appendFileSync("./temporary/fileA.txt", "This is line 2. ", { flag: "a" });

appendFileSync("./temporary/fileA.txt", "This is line 3. ");

const readWriteFile = readFileSync("./temporary/fileA.txt", "utf8");

console.log(readWriteFile);
