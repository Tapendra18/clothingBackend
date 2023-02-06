const express = require("express");
const multer = require('multer');
const path = require('path');

const router = new express.Router();
const controllers = require("../controllers/userController");
const category = require("../controllers/categoryController");
const address = require("../controllers/addressController");
const support = require("../controllers/supportController");
const discount = require("../controllers/discountController");
const delivery = require("../controllers/deliveryController");

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

//category
router.post("/api/v1/category" ,upload.fields([{name:"image", maxCount:1}]), category.categorydata);
router.get("/api/v1/category", category.categoryget);
router.delete("/api/v1/category/:_id", category.categorydelete);


//address
router.post("/api/v1/address" , address.addressData);
router.get("/api/v1/address" , address.addressget);
router.delete("/api/v1/address/:_id" , address.addressdelete);

//support
router.post("/api/v1/support" , support.supportData);
router.get("/api/v1/support" , support.supportget);
router.delete("/api/v1/support/:_id" , support.supportDelete);

//discount
router.post("/api/v1/discount" , discount.discountData);
router.get("/api/v1/discount" , discount.discountget);
router.delete("/api/v1/discount/:_id" , discount.discountDelete);

//delivery
router.post("/api/v1/delivery" , delivery.deliveryData);
router.get("/api/v1/delivery" , delivery.deliveryShow);
router.delete("/api/v1/delivery/:_id" , delivery.deliverydelete);


module.exports = router;