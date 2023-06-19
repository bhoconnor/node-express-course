// This module demos callback hell

const { writeFile } = require("fs");

// writeFile syntax includes ([path], (error, result), then enter what to do if there's an error & what the result will be
console.log("at start");

writeFile("./temporary/output.txt", "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile(
      "./temporary/output.txt",
      "This is line 2\n",
      { flag: "a" },
      (err, result) => {
        console.log("at point 2");
        if (err) {
          console.log("This error happened: ", err);
        } else {
          writeFile(
            "./temporary/output.txt",
            "This is line 3\n",
            { flag: "a" },
            (err, result) => {
              console.log("at point 3");
              if (err) {
                console.log("This error happened: ", err);
              } else {
                console.log(result);
              }
            }
          );
        }
      }
    );
  }
});
