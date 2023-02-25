const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const productModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: "title"
    },
    price: {
        type: String,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category"
        }
    ],
    subcategory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subcategory"
        }
    ],
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("products", productModel);