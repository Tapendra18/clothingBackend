const contact = require("../models/contactModel");
const liveController = {};



liveController.contactPost = async (req, res) => {
   

    try {
        const contacts = new contact(req.body);
        await contacts.save();
        return res.status(200).send({
            success:true,
            data:contacts
        })
    }catch(err){
        res.status(500).send({
            success:false,
            msg:err
        })
    }
}

module.exports = liveController;