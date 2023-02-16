const homesidebars = require("../models/homesidebarModel");
const liveController = {};

liveController.homesidebarPost = async function (req, res){
    try{

        if(req.files.image){
            req.body.image = req.files.image[0].path
        }

        const homesidebar = new homesidebars(req.body);
        await homesidebar.save();
        return res.status(200).send({
            success : true,
            data:homesidebar
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            msg :err
        })
    }
}

liveController.homesidebarGet =async function (req ,res){
    try{
        const homesidebar = await homesidebars.find();
        return res.status(200).send({
            success : true,
            data : homesidebar
        })
    }catch(err){
        return res.status(200).send({
            success :false,
            msg :err + "error in "
        })
    }
}

module.exports = liveController;