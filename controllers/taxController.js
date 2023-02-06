const tax = require("../models/taxModel");

const liveController = {};

liveController.taxData = async function (req, res) {
    try {
        const taxs = new tax(req.body);
        await taxs.save();
        return res.status(200).send({
            success: true,
            data: taxs
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.taxget = async function (req, res) {
    try {
        // const taxs = new tax(req.body);
        const taxs = await tax.find();
        return res.status(200).send({
            success: true,
            data: taxs
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.taxDelete = async function (req, res) {
    try {
        // const taxs = new tax(req.body);
        const taxs = await tax.deleteOne({ id: req.params._id })
        return res.status(200).send({
            success: true,
            data: taxs
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.taxUpdate = async function (req, res) {
    try {
        // const taxs = new tax(req.body);
        const taxs = await tax.findOneAndUpdate({ id: req.params._id }, {
            $set: {
                title: req.body.title,
                code: req.body.code,
                percentage: req.body.percentage
            }
        })
        return res.status(200).send({
            success: true,
            data: taxs
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

module.exports = liveController;