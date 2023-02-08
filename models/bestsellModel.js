const mongoose = require("mongoose");

const bestSell = new mongoose.Schema({
    subtitle:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    bestsell:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active" , "Inactive"],
        default:"Active"
    }
} , {
    timestamps:true
});

module.exports = mongoose.model('bestSellers' , bestSell);