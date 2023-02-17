const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const daydeal = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    image: {
        required:true,
        type: String,
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

module.exports = mongoose.model("daydeals", daydeal);