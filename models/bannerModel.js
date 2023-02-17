const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const banner = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
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

module.exports = mongoose.model("banners", banner);