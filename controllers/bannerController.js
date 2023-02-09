const banner = require("../models/bannerModel");
const liveController = {};

liveController.bannerPost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path;
        }
        const banners = new banner(req.body);
        await banners.save();
        return res.status(200).send({
            success: true,
            data: banners
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.bannerGet = async function(req , res){
    try{
        const banners = await banner.find();
        return res.status(200).send({
            success:true,
            data:banners
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            data:err
        })
    }
}

module.exports = liveController;