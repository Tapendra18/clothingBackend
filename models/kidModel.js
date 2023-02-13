const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const kidModel = new mongoose.Schema({
    image :{
        type : String,
        required : true
    },
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        slug :"title"
    },
    status :{
        type : String,
        enum :["Active" , "Inactive"],
        default:"Active"
    }
} , {
    timestamps:true
});

module.exports = mongoose.model("kidDatas" , kidModel);