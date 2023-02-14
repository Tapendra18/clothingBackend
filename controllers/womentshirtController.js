const womentshirt = require("../models/womentshirtModel");
const liveController = {};

liveController.womentshirtPost = async function(req, res){
    try{
        if(req.files.image){
            req.body.image = req.files.image[0].path
        }
        const womentshirts = new womentshirt(req.body);
        await womentshirts.save();
        return res.status(200).send({
            success : true,
            data : womentshirts
        })
    }catch(err ){
        res.status(500).send({
            success: false,
            msg : err
        })
    }
}

liveController.womentshirtGet = async function (req, res){
    try{
        const womentshirts = await womentshirt.find();
        return res.status(200).send({
            success : true,
            data : womentshirts
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            data : err
        })
    }
}

module.exports = liveController;