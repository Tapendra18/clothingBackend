const bestSell = require("../models/bestsellModel");

const liveController = {};

liveController.bestSellPost = async function(req, res){
    try{
        if(req.files.bestsell){
            req.body.bestsell = req.files.bestsell[0].path
        }
        const bestSellers = new bestSell(req.body);
        await bestSellers.save();
        return res.status(200).send({
            success:true,
            data:bestSellers
        })
    }catch(err){
        res.status(500).send({
            success:false,
            msg: err
        })
    }
}

liveController.bestSellGet = async function (req, res){
    try{
        const bestSellers = await bestSell.find();
        return res.status(200).send({
            success:true,
            data:bestSellers
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            data:err
        })
    }
}

module.exports = liveController;