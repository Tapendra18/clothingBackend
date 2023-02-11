const mongoose = require("mongoose");

const comment = new mongoose.Schema({

    comment: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model("comments", comment);