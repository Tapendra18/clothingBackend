const mongoose = require("mongoose");

const order = new mongoose.Schema({
    price: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    confirm: {
        type: Boolean,
        requiredL: true
    },
    adult: {
        type: Boolean,
        required: true
    },
    driverconfirm: {
        type: Boolean,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    paymode: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }, 
    discounts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "discount"
        }
    ],
    addresss: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "address"
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Orders' , order);