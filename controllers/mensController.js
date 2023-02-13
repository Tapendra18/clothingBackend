const mensModel = require("../models/mensModel");

const liveController = {};

liveController.mensModelPost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path
        }
        const menModels = new mensModel(req.body);
        await menModels.save();
        return res.status(200).send({
            success: true,
            data: menModels
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.mensModelGet = async function (req, res) {
    try {
        const menModels = await mensModel.find();
        return res.status(200).send({
            success: true,
            data: menModels
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;