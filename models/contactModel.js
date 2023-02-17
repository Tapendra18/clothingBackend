const mongoose = require("mongoose");
const validator = require("validator");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);


const contact = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        maxlength: 10
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
    ,
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    slug: {
        type: String,
        slug: "title"
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("contacts", contact);