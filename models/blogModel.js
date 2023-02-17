const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const blog = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type: String,
        requried:true
    },
    image:{
        type:String,
        requried:true
    },
    status:{
        type:String,
        enum:["Active" , "Inactive"],
        default:"Active"
    },
    slug: {
        type: String,
        slug: "title"
    },
} , {
    timestamps:true
});

module.exports = mongoose.model("blogs" , blog);