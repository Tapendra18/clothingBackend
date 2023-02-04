const express = require("express");
const multer = require('multer');
const path = require('path');

const router = new express.Router();
const controllers = require("../controllers/userController");
const category = require("../controllers/categoryController");
const address = require("../controllers/addressController");
const support = require("../controllers/supportController");
const discount = require("../controllers/discountController");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname)); //Appending .jpg
    },
});

const upload = multer({storage:storage})


router.post("/user/register"  ,  controllers.userregister);
router.post("/user/login" , controllers.userlogin);
router.post("/api/v1/category" ,upload.fields([{name:"image", maxCount:1}]), category.categorydata);
router.post("/api/v1/address" , address.addressData);
router.post("/api/v1/support" , support.supportData);
router.post("/api/v1/discount" , discount.discountData);

module.exports = router;