const mongoose = require("mongoose");

const support = new mongoose.Schema({
      order:{
        type:String,
        required:true
      },
      title:{
        type:String ,
        required:true
      },
      content:{
        type:String,
        required:true
      },
      mobileno:{
        type:Number,
        required:true
      },
      status: {
          type: String,
          enum: ["Active", "Inactive"],
          default: "Active"
      },
} ,{
    timestamps:true
});

module.exports = mongoose.model('supports' , support);
