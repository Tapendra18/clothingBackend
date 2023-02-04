const addres = require("../models/addressModel");

const liveController = {};

liveController.addressData = async function (req, res){

    const { name , mobileno , pincode , city , state , address } = req.body;

    if( !name || !mobileno || !pincode || !city || !state || !address){
        res.status(400).json({error:"Please Enter All Input"});
    }

    try{
        const addresss = new addres(req.body);
        await addresss.save();
        console.log(req.body, "addddddddddd")
        return res.status(200).send({
            success:true,
            data:addresss
        })
        

    }catch(err){
        return res.status(500).send({
            success:false,
            msg :err + "address not save"
        })
    }
}

module.exports = liveController;