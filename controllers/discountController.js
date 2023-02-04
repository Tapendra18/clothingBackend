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

module.exports = liveController;