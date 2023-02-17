const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const comment = new mongoose.Schema({

    comment: {
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

module.exports = mongoose.model("comments", comment);