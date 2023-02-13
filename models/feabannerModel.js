const mongoose = require("mongoose");

const feabannerModel = new mongoose.Schema({
    image: {
        type : String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    status:{
        type :String,
        enum :["Active" , "Inactive"],
        default:"Active"
    }
} ,{
    timestamps:true
});

module.exports = mongoose.model("feabanners", feabannerModel);