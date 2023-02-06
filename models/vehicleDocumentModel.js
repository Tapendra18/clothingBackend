const mongoose = require("mongoose");

const vehicleDocument = new mongoose.Schema({
    
    // vehicle:{
    //     type:String

    // }
    // ,
    img: {
        data: Buffer,
        contentType: String
    }, 
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
});

module.exports = mongoose.model('vehicleDocuments', vehicleDocument)