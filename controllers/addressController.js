const addres = require("../models/addressModel");

const liveController = {};

liveController.addressData = async function (req, res) {

    const { name, mobileno, pincode, city, state, address, age, gender } = req.body;

    if (!name || !mobileno || !pincode || !city || !state || !address || !age || !gender) {
        res.status(400).json({ error: "Please Enter All Input" });
    }

    try {
        const addresss = new addres(req.body);
        await addresss.save();
        console.log(req.body, "addddddddddd")
        return res.status(200).send({
            success: true,
            data: addresss
        })


    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "address not save"
        })
    }
}

liveController.addressget = async function (req, res) {
    // const address = new addres(req.body);
    try {
        const address = await addres.find();
        return res.status(200).send({
            success: true,
            data: address
        })


    } catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
  
}

module.exports = liveController;