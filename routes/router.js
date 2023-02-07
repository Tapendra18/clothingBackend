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
const vehicle = require("../controllers/vehicleController");
// const { vehicleData  = require("../controllers/vehicleController");
const vehicleDocument = require("../controllers/vehicleDocumentController");
const tax = require("../controllers/taxController");
const vendorReg = require("../controllers/vendorController");
const order = require("../controllers/orderController");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname)); //Appending .jpg
    },
});

const upload = multer({ storage: storage })


router.post("/api/v1/register", controllers.userregister);
router.post("/api/v1/login", controllers.userlogin);

//category
router.post("/api/v1/category", upload.fields([{ name: "image", maxCount: 1 }]), category.categorydata);
router.get("/api/v1/category", category.categoryget);
router.delete("/api/v1/category/:_id", category.categorydelete);
router.put("/api/v1/category/:_id", category.categoryUpdate);


//address
router.post("/api/v1/address", address.addressData);
router.get("/api/v1/address", address.addressget);
router.delete("/api/v1/address/:_id", address.addressdelete);
router.put("/api/v1/address/:_id", address.addressUpdate);

//support
router.post("/api/v1/support", support.supportData);
router.get("/api/v1/support", support.supportget);
router.delete("/api/v1/support/:_id", support.supportDelete);
router.put("/api/v1/support/:_id", support.supportUpdate);

//discount
router.post("/api/v1/discount", discount.discountData);
router.get("/api/v1/discount/:_id", discount.discountget);
router.delete("/api/v1/discount/:_id", discount.discountDelete);
router.put("/api/v1/discount/:_id", discount.discountUpdate);

//delivery
router.post("/api/v1/delivery", delivery.deliveryData);
router.get("/api/v1/delivery", delivery.deliveryShow);
router.delete("/api/v1/delivery/:_id", delivery.deliverydelete);
router.put("/api/v1/delivery/:_id", delivery.deliveryUpdate);


//vehicle;
router.post("/api/v1/vehicle", vehicle.vehicleData);
router.get("/api/v1/vehicle", vehicle.vehicleget);
router.get("/api/v1/vehicle/:_id", vehicle.vehicleget);
router.delete("/api/v1/vehicle/:_id", vehicle.vehicleDelete);
router.put("/api/v1/vehicle/:_id", vehicle.vehicleUpdate);


//vehicle document
router.post("/api/v1/vehicledocument" ,vehicleDocument.vehicleDocumentData);

//tax
router.post("/api/v1/tax" , tax.taxData);
router.get("/api/v1/tax" , tax.taxget);
router.delete("/api/v1/tax/:_id" , tax.taxDelete);
router.put("/api/v1/tax/:_id" , tax.taxUpdate);

//vendor registor
router.post("/api/v1/vendorReg" , vendorReg.vendorRegister);
router.post("/api/v1/vendorlog" , vendorReg.vendorlogin);

//order
router.post("/api/v1/order" , order.order);

module.exports = router;