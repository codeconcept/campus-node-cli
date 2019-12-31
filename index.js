const request = require("request");
const fs = require("fs");

request("https://www.campus.academy/").pipe(fs.createWriteStream("codac.html"));
