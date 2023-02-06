const tax = require("../models/taxModel");

const liveController = {};

liveController.taxData = async function (req, res){
    try{
        const taxs = new tax(req.body);
        await taxs.save();
        return res.status(200).send({
            success:true,
            data:taxs
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

module.exports = liveController;