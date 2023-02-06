const vehicle = require("../models/vehicleDocumentModel");

const liveController = {};

liveController.vehicleDocumentData = async function(req, res){
    try{
        const vehicles = new vehicle(req.body);
        await vehicles.save();
        return res.status(200).send({
            success:true,
            data:vehicles
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg : err + "erroor"
        })
    }
}

module.exports = liveController;