const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

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
    },
    slug: {
        type: String,
        slug: "title"
    }
});

module.exports = mongoose.model('vehicleDocuments', vehicleDocument)