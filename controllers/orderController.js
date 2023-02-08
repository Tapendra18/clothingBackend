const orders = require("../models/orderModel");
const liveController = {};

liveController.order = async (req, res) => {
    const { price, total, date, confirm, adult, driverconfirm, note, paymode } = req.body;
    if(!price || !total || !!date || !confirm || !adult || !driverconfirm || !note || !paymode){
        res.status(400).json({ error: "Please Enter All Input" });
    }
    try {
        const order = new orders(req.body);
        await order.save();
        return res.status(200).send({
            success: true,
            data: order
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
   
}

module.exports = liveController;