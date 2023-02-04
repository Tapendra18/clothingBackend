const mongoose = require("mongoose");


const category = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: "title"
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    image:
    {
        type: String,
        // required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('categorys', category);
