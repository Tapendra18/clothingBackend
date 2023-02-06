const discounts = require("../models/discountModel");

const liveController = {};

liveController.discountData = async function (req, res) {
    try{
        const discount = new discounts(req.body);
        await discount.save();
        return res.status(200).send({
            success:true,
            data:discount 
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg : err + "disc==="
        })
    }
};

liveController.discountget = async function (req, res){
    try{
        const discount = await discounts.find({id : req.params._id});
        console.log(req.params._id , "dasdasd");
        console.log(discount , "dissss");
        return res.status(200).send({
            success: true ,
            data:discount
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

liveController.discountDelete = async function(req, res){
    try{
        console.log(req.params._id , "delerete");
        const discount = await discounts.deleteOne({id : req.params._id});
        return res.status(200).send({
            success:true,
            data:discount,
            msg :"successfully delete"
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg: err + "error in delete api"
        })
    }
}

liveController.discountUpdate = async function (req ,res){
    try{

        console.log(req.params._id ,"updaaateee");
        const discount = await discounts.findOneAndUpdate({id:req.params._id},
            {$set:{
            title:req.body.title,
            code:req.body.code,
            amount:req.body.amount,
            valid:req.body.valid
        }});
        discount.save();
        return res.status(200).send({
            success:true,
            data:discount,
            msg :"successfully update"
        })
    }catch(err){
        return res.status(500).send({
            success:true,
            msg:err + "error in update"
        })
    }
}

module.exports = liveController;