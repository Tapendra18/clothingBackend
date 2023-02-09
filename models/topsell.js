const mongoose = require("mongoose");

const topsell = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
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

module.exports = mongoose.model("topsells" , topsell);