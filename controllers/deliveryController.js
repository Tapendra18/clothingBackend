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

liveController.deliverydelete = async function (req, res){
    try{
        console.log(req.params.id, "dellletete");
        const deliverrrr = await delivery.deleteOne({id: req.params._id});
        return res.status(200).send({
            success:true,
            data:deliverrrr,
            msg:"successfully deleted"
        })
    }catch(err){
       return res.status(500).send({
        success:false,
        msg : err + "error in delete API"
       })
    }
}

module.exports = liveController;