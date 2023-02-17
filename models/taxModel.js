const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

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
    },
    slug: {
        type: String,
        slug: "title"
    }
},
    {
        timestamps: true
    });

    module.exports = mongoose.model("taxs" , taxModel);