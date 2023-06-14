const http = require("http");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     res.end("RightO cap'n, welcome to the Ship's Home Page!");
  //   }
  //   if (req.url === "/about") {
  //     res.end("Here is what this Ship is all about...");
  //   }
  //   res.end(`
  //     <h1>Oops!</h1>
  //   <p>We can't seem to find your way back to the Ship!</p>
  //   <a href="/">back home</a>
  //     `);
  // });

  if (req.url === "/") {
    res.end("RightO cap'n, welcome to the Ship's Home Page!");
  } else if (req.url === "/about") {
    res.end("Here is what this Ship is all about...");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find your way back to the Ship!</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(3000);
