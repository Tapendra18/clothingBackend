const mongoose = require("mongoose");

const vendorstore = new mongoose.Schema({
    image: {
        type: String,
        required: true
    } ,
    year: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("vendorStores", vendorstore);
