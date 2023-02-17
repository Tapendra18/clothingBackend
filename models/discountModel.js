const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const discount = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    valid: {
        type: Date,
        required:true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    slug: {
        type: String,
        slug: "title"
    }

} , {
    timestamps:true
});

module.exports = mongoose.model('discounts' ,discount);