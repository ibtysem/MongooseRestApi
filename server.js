const express = require("express");
const res = require("express/lib/response");
const app = express();
const DBconnect = require("./DBconnect");
DBconnect();
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(5000, (err) =>
  err ? console.log(err) : console.log("server is runing")
);
