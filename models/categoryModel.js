const mongoose = require("mongoose");


const category = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    }
    // },
    // slug: {
    //     type: String,
    //     slug: "title"
    // },
    ,
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    image:
    {
        // data: Buffer,
        // contentType: String
        type:String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('categorys', category);
