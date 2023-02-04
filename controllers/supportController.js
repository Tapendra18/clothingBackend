const support = require("../models/supportModel");

const liveController = {};

liveController.supportData = async function (req ,res){
    // const {order , title , content , mobileno} = req.body

    // if(!order || !title || !content ){
    //     res.status(400).json({error:"Please Enter All Input "});

    // }

    try{
        const supports = new support(req.body);
        await supports.save();
        console.log(req.body , "supportttt");
        return res.status(200).send({
            success:true,
            data:supports

        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg : err + "support Not send "
        })
    }
}

module.exports = liveController;