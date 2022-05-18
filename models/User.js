const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const schema = mongoose.Schema;
const userSchema = schema({
  name: String,
  email: { type: String, unique: true },
  isadmin: { type: Boolean, default: false },
});
const user = mongoose.model("user", userSchema);
module.exports = user;
