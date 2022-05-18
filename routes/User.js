const express = require("express");

const userRouter = express.Router();
const User = require("../models/User");
//post a user
userRouter.post("/add", async (req, res) => {
  try {
    const newUser = new User(req.body);
    let result = await newUser.save();
    res.send({ user: result, msg: "user added succsefully" });
  } catch (error) {
    console.log(error);
  }
});

//get all user
userRouter.get("/users", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ users: result, msg: "get all" });
  } catch (error) {
    console.log(error);
  }
});

//get user by id
userRouter.get("/:id", async (req, res) => {
  try {
    let result = await User.findById({ _id: req.params.id });
    res.send({ user: result, msg: "get user" });
  } catch (error) {
    console.log(error);
  }
});
//delet user dy id
userRouter.delete("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "user deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update user
userRouter.put("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "user updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
