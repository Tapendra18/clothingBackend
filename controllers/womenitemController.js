const womenitem = require("../models/WomenItemModel");

const liveController = {};

liveController.womenitemPost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path;
        }
        const womenitems = new womenitem(req.body);
        await womenitems.save();
        return res.status(200).send({
            success: true,
            data: womenitems
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.womenitemGet = async function (req, res) {
    try {
        const womenitems = await womenitem.find();
        return res.status(200).send({
            success: true,
            data: womenitems
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

module.exports = liveController;