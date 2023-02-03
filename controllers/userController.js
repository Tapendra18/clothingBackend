const jwt = require('jsonwebtoken');

const users = require("../models/userModel");
const login = require("../models/loginModel");

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

            const storeData = await userregister.save();
            res.status(200).json(storeData);
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
    const token = jwt.sign({ email: result.email, id :result._id }, 'secretKey', { expiresIn: '1h' });

    try {
        const user = login.findOne((u) => u.email === email);
        if (user) {
            jwt.verify(token);
            // res.status(200).json({ message: "Login success" });
            res.status(200).send({
                success:true,
                data:user,token
            })
        }

    } catch (err) {
        res.status(401).send({ err: 'Incorrect username or password' });
    }
}
