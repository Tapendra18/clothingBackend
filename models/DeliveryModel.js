const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

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
     },
     slug: {
      type: String,
      slug: "title"
  }
} , {
    timestamps:true
} 

);

module.exports = mongoose.model('deliverys' , delivery);