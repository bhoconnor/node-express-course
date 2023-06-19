const os = require("os");

// Info about user
const user = os.userInfo();
console.log(user);

// Info about computer
const compInfo = {
  // Operating system name (eg, Linux for Linux, Darwin for Mac, Windows_NT for Windows)
  name: os.type(),
  // Operating system "kernel version" (also found under About this Mac > System Information)
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(compInfo);
