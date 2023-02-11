const blog = require("../models/blogModel");
const liveController = {};

liveController.blogpost = async function (req, res) {
    try {
        if (req.files.image) {
            req.body.image = req.files.image[0].path
        }

        const blogs = new blog(req.body);
        await blogs.save();
        return res.status(200).send({
            success: true,
            data: blogs
        })
    }catch(err){
        res.status(500).send({
            success:false,
            msg:err
        })
    }
};


liveController.blogGet = async function(req , res){
    try{
        const blogs = await blog.find();
        return res.status(200).send({
            success :true,
            data:blogs
        })
    }catch(err){
        return res.status(500).send({
            success :false,
            data:err 
        })
    }
};

module.exports = liveController;