const mongoose = require("mongoose");

const delivery = new mongoose.Schema({
     title:{
        type:String,
        required:true
     },
     amount:{
        type:Number,
        required:true
     },
     status:{
        type:String,
        enum:["Active" , "Inactive"],
        default:"Active"
     }
} , {
    timestamps:true
} 

);

module.exports = mongoose.model('deliverys' , delivery);