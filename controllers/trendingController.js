const trending = require("../models/trendingModel");
const liveController = {};

liveController.trendingPost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path
        }

        const trendings = new trending(req.body);
        await trendings.save();
        return res.status(200).send({
            success: true,
            data: trendings
        })
    } catch (err) {
        req.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.trendingGet = async function (req, res) {
    try {
        const trendings = await trending.find();
        return res.status(200).send({
            success: true,
            data: trendings
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;