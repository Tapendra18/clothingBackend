const suppliers = require("../models/supplierModel");
const liveController = {};

liveController.supplierPost = async function (req, res){
    try{
        if(req.files.image){
            req.body.image = req.files.image[0].path
        }

        const supplier = new suppliers(req.body);
        await supplier.save();
        return res.status(200).send({
            success :true,
            data :supplier
        })
    }catch(err){
        res.status(500).send({
            success : false,
            msg :err
        })
    }
}

liveController.supplierGet = async function(req,res){
    try{
        const supplier = await suppliers.find();
        return res.status(200).send({
            success : true,
            data :supplier
        })
    }catch(err){
        return res.status(500).send({
            success :false,
            data : err
        })
    }
}

module.exports = liveController;