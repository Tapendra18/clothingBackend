const support = require("../models/supportModel");

const liveController = {};

liveController.supportData = async function (req, res) {

    try {
        const supports = new support(req.body);
        await supports.save();
        console.log(req.body, "supportttt");
        return res.status(200).send({
            success: true,
            data: supports

        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "support Not send "
        })
    }
}


liveController.supportget = async function (req, res) {
    try {
        const supports = await support.find();
        console.log(supports);
        return res.status(200).send({
            success: true,
            data: supports
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.supportDelete = async function (req, res) {
    try {
        console.log(req.params._id, "delerete");
        const supports = await support.deleteOne({ id: req.params._id });
        return res.status(200).send({
            success: true,
            data: supports,
            msg: "successfully delete"
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "error in delete api"
        })
    }
}

liveController.supportUpdate = async function (req, res) {
    try {

        console.log(req.params._id, "updaaateee");
        const supports = await support.findOneAndUpdate({ id: req.params._id },
            {
                $set: {
                   order:req.body.order,
                   title:req.body.title,
                   content:req.body.content,
                   mobileno:req.body.mobileno
                }
            });
        supports.save();
        return res.status(200).send({
            success: true,
            data: supports,
            msg: "successfully update"
        })
    } catch (err) {
        return res.status(500).send({
            success: true,
            msg: err + "error in update"
        })
    }
}



module.exports = liveController;