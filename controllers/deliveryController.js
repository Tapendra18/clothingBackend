const delivery = require("../models/DeliveryModel");
const liveController = {};

liveController.deliveryData = async function(req, res){
    try{
        const deliverys = new delivery(req.body);
        await deliverys.save();
        return res.status(200).send({
            success:true,
            data:deliverys
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg :err
        })
    }
}

liveController.deliveryShow = async function (req , res){
    try{

        // const deliveryss = new delivery(req.body);
        const deliverrrr= await delivery.find();
        console.log(deliverrrr , "deliverrrr")
        return res.status(200).send({
            success:true,
            data:deliverrrr
        }) 

    }catch(err){
        return res.status(500).send({
            success:false,
            msg :err
        })
    }
}

module.exports = liveController;