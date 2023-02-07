const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const SECRET_KEY = "NODESAPI"
const users = require("../models/userModel");
const loginModel = require("../models/loginModel");

exports.userregister = async (req, res) => {
    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(400).json({ error: "Please Enter All Input Data" })
    }

    try {
        const presuer = await users.findOne({ email: email });

        if (presuer) {
            res.status(400).json({ error: "this User already exist in our db" })
        } else {
            const userregister = new users({
                fname, email, password, cpassword
            });
            if (password !== cpassword) {
                return res.status(400).json({ error: 'Password and Confirm Password do not match' });
            }

            console.log(userregister, "efsfsrfrerfer");

            const storeData = await userregister
            const token = jwt.sign({ email: storeData.email, id: storeData._id }, SECRET_KEY);
            res.status(201).json({ user: storeData, token: token });
            userregister.save();
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details " + error });
    }

}

exports.userlogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Please Enter All Input " });
    }

    try {

        const exitinguser = await loginModel.findOne({email :req.body.email});

        if (exitinguser) {
            const matchpassword = await bcrypt.compare(password, exitinguser.password);

            if (!matchpassword) {
                return res.status(400).json({ message: "invalid credential" })
            }

            const token = jwt.sign({ email: exitinguser.email, id: exitinguser._id }, SECRET_KEY);
            res.status(201).json({ user: exitinguser, token: token });

        } else {
            res.status(404).json({ error: "user not found" })
        }
        
    } catch (err) {
        res.status(401).send({ err: 'Incorrect email or password' });
    }
}
