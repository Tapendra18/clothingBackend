const addres = require("../models/addressModel");
// const mongo = require("mong")

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

liveController.addressdelete = async function (req ,res){
    try{
        console.log(req.params.id , "deleteeeee");
        const address = await addres.deleteOne({id: req.params._id});
        console.log(address , "deletereraddddd");
        return res.status(200).send({
            success:true,
            data:address,
            msg:"successfully deleted"
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err + "error in delete API"
        })
    }
}

liveController.addressUpdate = async function (req , res) {
    try{
        const address = await addres.findOneAndUpdate({id:req.params._id} , 
            {$set:{
                name:req.body.name,
                mobileno:req.body.mobileno,
                age:req.body.age,
                gender:req.body.gender,
                pincode:req.body.pincode,
                city:req.body.city,
                state:req.body.state,
                address:req.body.address

        }});
        address.save();
        return res.status(200).send({
            success:true,
            data:address,
            msg:"successfully update"
        })

    }catch(err){
        return res.status(500).send({
            success:true,
            msg: err  + "error in update"
        })
    }
}

module.exports = liveController;