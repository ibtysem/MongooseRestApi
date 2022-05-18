const express = require("express");
const res = require("express/lib/response");
const app = express();
const DBconnect = require("./DBconnect");

app.use(express.json());
app.use("/user", require("./routes/User"));
DBconnect();
app.listen(5000, (err) =>
  err ? console.log(err) : console.log("server is runing")
);
