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

module.exports = mongoose.model('login', loginModel);
