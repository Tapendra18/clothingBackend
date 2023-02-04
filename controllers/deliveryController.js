const discount = require("../models/DeliveryModel");
const liveController = {};

liveController.discountData = async function(req, res){
    try{
        const discounts = new discount(req.body);
        await discounts.save();
        return res.status(200).send({
            success:true,
            data:discounts
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg :err
        })
    }
}

module.exports = liveController;