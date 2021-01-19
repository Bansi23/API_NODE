const mongoose = require("mongoose");
const validator = require("validator");
var Schema = mongoose.Schema;

//schema
const UserSchema = new Schema({
  fname: {
    type: String,
    required: true,
    minlength: [2, "Enter minimum 2 latter"],
  },
  lname: {
    type: String,
    required: true,
    minlength: [2, "Enter minimum 2 latter"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id is already registered"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("enter valid email");
      }
    },
  },
  mobile: {
    type: Number,
    required: true,
    unique: [true, "Number is already registered"],
    minlength: 10,
    maxlength: 10,
  },
  address: {
    type: String,
    required: true,
  },
  //  profile: { data: Buffer, contentType: String }
});

//model

const UserModel = new mongoose.model("User", UserSchema);

module.exports = UserModel;
