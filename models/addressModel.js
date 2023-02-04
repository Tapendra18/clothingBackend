const mongoose = require("mongoose");

const Address = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobileno: {
        type: Number,
        required: true,
        minlenth:10
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
}, {
    timestamps: true
});

module.exports = mongoose.model('addresss' , Address);