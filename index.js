const fs = require("fs");
const readStream = fs.createReadStream("./technos.txt");

readStream.on("data", chunk => {
  console.log(chunk.toString("utf8"));
});
readStream.on("end", () => {
  console.log("End of file");
});
