const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const featurecategory = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    }
    ,
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
        type: String
    }
   
},

    {
        timestamps: true
    });

module.exports = mongoose.model('categorys', featurecategory);
