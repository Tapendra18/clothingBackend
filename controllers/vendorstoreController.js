const vendorstore = require("../models/vendorstoreModel");

const liveController = {};

liveController.vendorstorePost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path
        }
        const vendorstores = new vendorstore(req.body);
        await vendorstores.save();
        return res.status(200).send({
            success: true,
            data: vendorstores
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.vendorstoreGet = async function (req, res) {
    try {
        const vendorStores = await vendorstore.find();
        return res.status(200).send({
            success: true,
            data: vendorStores
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;