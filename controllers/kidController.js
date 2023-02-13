const kidData = require("../models/kidModel");
const liveController = {};

liveController.kidDataPost = async function(req, res){
    try{
        if(req.files.image){
            req.body.image = req.files.image[0].path
        }

        const kidDatas = new kidData(req.body);
        await kidDatas.save();
        return res.status(200).send({
            success : true,
            data : kidDatas
        })
    }catch(err){
        res.status(500).send({
            success : false,
            msg : err
        })
    }
}

liveController.kidDataGet = async function (req, res) {
    try {
        const kidDatas = await kidData.find();
        return res.status(200).send({
            success: true,
            data: kidDatas
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;