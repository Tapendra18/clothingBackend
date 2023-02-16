const category = require("../models/category");
const liveController = {};

liveController.categoryPost = async function (req , res){
    try{
        const categorys = new category(req.body);
        await categorys.save();
        return res.status(200).send({
            success : true,
            data : categorys
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            msg : err
        })
    }
}

liveController.categoryGet = async function (req ,res ){
    try{
        const categorys = await category.find();
        return res.status(200).send({
            success : true,
            data: categorys
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            msg : err
        })
    }
}

module.exports = liveController;