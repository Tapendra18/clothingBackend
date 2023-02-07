const vendorReg = require("../models/venderRegModel");
// const vendorlogin = require("../models/vendorLogModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "NODESAPI";

exports.vendorRegister = async (req, res) => {
    const { username, email, password, phone } = req.body;

    if (!username || !email || !password || !phone) {
        res.status(400).json({ error: "Please Enter All Input Data" });
    }

    try {
        const presuer = await vendorReg.findOne({ email: email });

        if (presuer) {
            res.status(400).json({ error: "this User already exist in our db" })
        } else {
            const userregister = new vendorReg({
                username, email, password, phone
            });
            const storeData = await userregister;
            const token = jwt.sign({ email: storeData.email, id: storeData._id }, SECRET_KEY);
            res.status(201).json({ user: storeData, token: token });
            userregister.save();
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details " + error });
    }
}


exports.vendorlogin = async(req, res)=>{
    const {email ,password} = req.body;

    if(!email || !password){
        res.status(400).json({error :"Please Enter All Input"});
    }

    try{
        const exitinguser = await vendorReg.findOne({email : req.body.email});

        if(exitinguser){
            const matchpassword = await bcrypt.compare(password , exitinguser.password);

        if(!matchpassword)
        return res.status(400).json({message:"Invalid credential"})
        }

        const token = jwt.sign({ email: exitinguser.email, id: exitinguser._id }, SECRET_KEY);
        res.status(201).json({ user: exitinguser, token: token });
    }catch(err){
        res.status(401).send({err :"Incorrect email or password"});
    }
}
