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

module.exports = liveController;