const kidtshirt = require("../models/kidtshirt");

const liveController = {};

liveController.kidtshirtPost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path;
        }

        const kidtshirts = new kidtshirt(req.body);
        await kidtshirts.save();
        return res.status(200).send({
            success: true,
            data: kidtshirts
        })

    } catch (err) {
        res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.kidtshirtGet = async function (req, res) {
    try {
        const kidtshirts = await kidtshirt.find();
        return res.status(200).send({
            success: true,
            data: kidtshirts
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

module.exports = liveController;