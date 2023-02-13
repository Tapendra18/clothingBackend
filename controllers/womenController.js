const womenData = require("../models/womenModel");

const liveController = {};

liveController.womenDataPost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path
        }
        const womenDatas = new womenData(req.body);
        await womenDatas.save();
        return res.status(200).send({
            success: true,
            data: womenDatas
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.womenDataGet = async function (req, res) {
    try {
        const womenDatas = await womenData.find();
        return res.status(200).send({
            success: true,
            data: womenDatas
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;