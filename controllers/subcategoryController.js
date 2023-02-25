const subcategory = require("../models/subcategoryModel");
const liveController = {};

liveController.subcategoryPost = async function (req, res) {

    try {
        if (req.files.thumbnail) {
            req.body.thumbnail = req.files.thumbnail[0].path
        }
        const subcategorys = new subcategory(req.body);
        await subcategorys.save();
        return res.status(200).send({
            success: true,
            data: subcategorys
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "err in "
        })
    }
}

liveController.subcategoryGet = async function (req, res) {
    try {
        const subcategorys = await subcategory.find();
        return res.status(200).send({
            success: true,
            data: subcategorys
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

module.exports = liveController;