const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);


const category = new mongoose.Schema({
    title: {
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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('catetorycloths', category);