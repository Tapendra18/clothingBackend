const daydeal = require("../models/daydealModel");

const liveController = {};

liveController.daydealPost = async function(req , res){
    try{

        if(req.files.image){
            req.body.image = req.files.image[0].path
        }
        const daydeals = new daydeal(req.body);
        await daydeals.save();
        return res.status(200).send({
            success:true,
            data:daydeals
        })
    }catch(err){
        res.status(500).send({
            success:false,
            msg:err
        })
    }
}

liveController.bestSellGet = async function (req, res){
    try{
        const daydeals = await daydeal.find();
        return res.status(200).send({
            success:true,
            data:daydeals
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            data:err
        })
    }
}

module.exports = liveController;