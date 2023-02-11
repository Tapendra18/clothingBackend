const comment = require("../models/commentModel");
const liveController = {};

liveController.commentPost = async function (req, res) {
    try {
        const comments = new comment(req.body);
        await comments.save();
        return res.status(200).send({
            success: true,
            data: comments
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.commentGet = async function(req, res){
    try{
        const comments = await comment.find();
        return res.status(200).send({
            success:true,
            data:comments
        })
    }catch(err){
        return res.status(500).send({
            success :false,
            data:err
        })
    }
}

module.exports = liveController;