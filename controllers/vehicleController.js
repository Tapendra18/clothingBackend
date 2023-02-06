const vehicle = require("../models/vehicleModel");

const liveController = {};

liveController.vehicleData = async function (req, res) {
    try {
        const vehicles = new vehicle(req.body);
        await vehicles.save();
        console.log(req.body, "vehhhhhh");
        return res.status(200).send({
            success: true,
            data: vehicles
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "vehicle err"
        })
    }
}

liveController.vehicleget = async function (req, res) {
    try {
        const vehicles = await vehicle.find();
        vehicle.findById({ id: req.params._id });
        return res.status(200).send({
            success: true,
            data: vehicles
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "error in vehicles api"
        })
    }
}

liveController.vehicleDelete = async function (req, res) {
    try {
        const vehicles = await vehicle.deleteOne({ id: req.params._id });
        return res.status(200).send({
            success: true,
            data: vehicles,
            msg: "successfully delete"
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "error in delete api"
        })
    }
}

liveController.vehicleUpdate = async function (req, res) {
    try {
        const vehicles = await vehicle.findOneAndUpdate({ id: req.params._id }, {
            $set: {
                title:req.body.title
            }
        })
        vehicles.save();
        return res.status(200).send({
            success:true,
            data:vehicles,
            msg:"successfully update"
        })
    }catch(err){
        return res.status(500).send({
            success:true,
            msg: err + "error in update api"
        })
    }
}

module.exports = liveController;