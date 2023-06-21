// Code below will create responses from server for certain pages (home, about, & anything else is an error)

const http = require("http");

// req & res are common, could be different if wanted; req is like if client was requesting something from webpage; res is what we're sending back
// Use `createServer` method on http
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
