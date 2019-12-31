const fs = require("fs");
fs.readFile("./technos.txt", (err, data) => {
  console.log(data);
});
