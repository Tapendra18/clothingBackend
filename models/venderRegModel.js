const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const venderRegModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
}, {
    timestamps: true
});

venderRegModel.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

module.exports = mongoose.model("venderRegister", venderRegModel);