const request = require("request");

request("https://www.campus.academy/", (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const statusCode = res.statusCode;
    console.log("statusCode", statusCode);
    console.log("body", body);
  }
});
