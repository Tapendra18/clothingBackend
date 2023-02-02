const mongoose = require("mongoose");
const validator = require("validator");
// const bcrypt = require("bcryptjs");

const loginModel = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Enter email"],
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
});

const login = new mongoose.model("login" , loginModel);
module.exports = login;