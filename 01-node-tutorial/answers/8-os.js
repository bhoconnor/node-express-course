const os = require("os");

// Info about user
const user = os.userInfo();
console.log(user);

// Info about computer
const compInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(compInfo);
