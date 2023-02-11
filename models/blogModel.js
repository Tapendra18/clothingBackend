const mongoose = require("mongoose");

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
    }
} , {
    timestamps:true
});

module.exports = mongoose.model("blogs" , blog);