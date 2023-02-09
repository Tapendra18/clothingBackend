const topsell = require("../models/topsell");
const liveController = {};

liveController.topsellPost = async function (req, res){
    try{
        if(req.files.image){
            req.body.image = req.files.image[0].path
        }

        const topsells = new topsell(req.body);
        await topsells.save();
        return res.status(200).send({
            success:true,
            data:topsells
        })
    }catch(err){
        res.status(500).send({
            success:false,
            msg : err
        })
    }
}

liveController.topsellGet  = async function(req, res){
    try{
        const topsells = await topsell.find();
        return res.status(200).send({
            success:true,
            data:topsells
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            data:err
        })
    }
}

module.exports = liveController;