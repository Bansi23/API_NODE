const express = require("express");
const User = require("../models/users");
const router = express.Router();

//#region common code
const commonSuccess = async (res, data) => {
  res.json({
    status: "success",
    data: data,
  });
};

const commonError = async (res, e) => {
  res.status(400).json({ message: "error", error: e });
};

const commonErrorServer = async (res, e) => {
  res.status(500).json({ message: "error", error: e });
};
//#endregion

//#region API route code
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const createUser = await user.save();
    commonSuccess(res, createUser);
  } catch (e) {
    commonError(res, e);
  }
});

//get user
router.get("/users", async (req, res) => {
  try {
    const userData = await User.find();
    commonSuccess(res, userData);
  } catch (e) {
    commonError(res, e);
  }
});

//get indivisual data
router.get("/users/:id", async (req, res) => {
  try {
    const Userdata = await User.findById(req.params.id);
    console.log(Userdata);
    commonSuccess(res, Userdata);
  } catch (e) {
    commonError(res, e);
  }
});

//updateAPI
router.patch("/users/:id", async (req, res) => {
  try {
    const UserUpdatedata = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    commonSuccess(res, UserUpdatedata);
  } catch (e) {
    commonErrorServer(res, e);
  }
});

//deleteAPI
router.delete("/users/:id", async (req, res) => {
  try {
    const UserDelete = await User.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(400).send("User not exist");
    } else {
      commonSuccess(res, UserDelete);
    }
  } catch (e) {
    commonErrorServer(res, e);
  }
});

//#endregion

module.exports = router;
