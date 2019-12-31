const fs = require("fs");
const writer = fs.createWriteStream("./massif.txt");

for (let i = 0; i < 100; i++) {
  writer.write(`${i} On est (quasi) en 2020\n`);
}

writer.on("data", function(chunk) {
  console.log("chunk", chunk);
});

writer.end(function() {
  console.log("end");
});

writer.on("close", function() {
  console.log("closed");
});

writer.on("open", function() {
  console.log("open");
});

console.log("First!");
