const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Address = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobileno: {
        type: Number,
        required: true,
        minlenth: 10
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true,
        minlenth: 6
    },
    city: {
        type: String,
        required: true,
        minlenth: 10

    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
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

module.exports = mongoose.model('addresss', Address);