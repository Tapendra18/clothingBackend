const feabanner = require("../models/feabannerModel");

const liveController = {};

liveController.feabannerPost = async function (req ,res){
    try{
        if(req.files.image){
            req.body.image = req.files.image[0].path
        }
        const feabanners = new feabanner(req.body);
        await feabanners.save();
        return res.status(200).send({
            success:true,
            data:feabanners
        })
    }catch(err){
        res.status(500).send({
            success:false,
            msg : err
        })
    }
}

liveController.feabannerGet = async function (req, res){
    try{
        const feabanners = await feabanner.find();
        return res.status(200).send({
            success:true,
            data : feabanners
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            data:err
        })
    }
}

module.exports = liveController;