// const mongoose = require("mongoose");
const categorys = require("../models/categoryModel");

const liveController = {};

liveController.categorydata = async function (req, res) {
    try{
        console.log(req.body , "catererre");
        console.log(req.files , "filesss");

        if(req.files.image){
            req.body.image  = req.files.images[0].path
        }
        const category = new categorys(req.body);
        await category.save();
        return res.status(200).send({
            success:true,
            data:category
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

liveController.categoryget = async function (req, res){
    try{
        const category = await categorys.find();
        return res.status(200).send({
            success:true,
            data:category
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

liveController.categorydelete = async function (req ,res) {
    try{
        console.log(req.params.id, "delleeett");
        const category = await categorys.deleteOne({id: req.params._id});
        console.log(category, "caterrrr");
        return res.status(200).send({
            success:true,
            data:category,
            msg:"successfully deleted "
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg: err + "error in delete api "
        })
    }
}


module.exports = liveController;