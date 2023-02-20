const recentlyadded = require("../models/recentlyaddedModel");
const liveController = {};

liveController.recentlyaddedPost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path
        }

        const recentlyaddeds = new recentlyadded(req.body);
        await recentlyaddeds.save();
        return res.status(200).send({
            success: true,
            data: recentlyaddeds
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.recentlyaddedGet = async function(req , res ){
    try{
        const recentlyaddeds = await recentlyadded.find();
        return res.status(200),send({
            success: true,
            data : recentlyaddeds
        })
    }catch(err){
        returnres.status(500).send({
            success : false,
            data : err
        })
    }
}

module.exports = liveController;