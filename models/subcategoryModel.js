const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const subcategory = new mongoose.Schema({
    categoryId:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category"
        },
    title: {
        type: String,
        required: true
    },
    thumbnail: {
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
}, {
    timestamps: true
});

module.exports = mongoose.model("subcategorys", subcategory);