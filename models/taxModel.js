const mongoose = require("mongoose");

const taxModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }
    ,
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
},
    {
        timestamps: true
    });

    module.exports = mongoose.model("taxs" , taxModel);