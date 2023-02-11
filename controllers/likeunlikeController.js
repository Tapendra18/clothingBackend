// const express = require('express');
// const app = express();

// let likes = {};

// app.post('/like/:id', (req, res) => {
//   const id = req.params.id;
//   if (!likes[id]) {
//     likes[id] = 0;
//   }
//   likes[id] += 1;
//   res.send({ likes: likes[id] });
// });

// app.post('/unlike/:id', (req, res) => {
//   const id = req.params.id;
//   if (!likes[id]) {
//     likes[id] = 0;
//   }
//   likes[id] -= 1;
//   res.send({ likes: likes[id] });
// });

let likes = {}

exports.like = async function (req, res) {

    try {
        const id = req.param._id;
        if (!likes[id]) {
            likes[id] = 0;
        }
        likes[id] += 1;
        return res.status(200).send({ likes: likes[id] });
    } catch (err) {
        return res.status(500).send({ err: "Not working" });
    }

}

exports.likeGet = async function(req, res){
    try{
       const like =  likes.find();
        return res.status(200).send({
            success:true,
            data:like
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            data:err
        })
    }
}

exports.unlike = async function (req, res) {
    try {
        const id = req.param._id;
        if (!likes[id]) {
            likes[id] = 0
        }
        likes[id] -= 1
        return res.status(200).send({ likes: likes[id] });
    } catch (err) {
        return res.status(500).send({ err: "not working" })
    }
}



