const fs = require("fs");
// spefiying encoding to get a string rather that a buffer
fs.readFile("./technos.txt", "utf8", (err, data) => {
  console.log(data);
});
