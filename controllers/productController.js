const productModel = require("../models/productModel");
const liveController = {};

liveController.productPost = async function (req, res) {
    try {
        if (req.files.product) {
            req.body.product = req.files.product[0].path
        }
        const product = new productModel(req.body);
        await product.save();
        return res.status(200).send({
            success: true,
            data: product
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.productGet = async function (req, res) {
    try {
        const product = await productModel.find();
        return res.status(200).send({
            success: true,
            data: product
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
};

module.exports = liveController;