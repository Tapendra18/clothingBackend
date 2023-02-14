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
const bestSell = require("../controllers/bestsellController");
const daydeal = require("../controllers/daydealController");
const banner = require("../controllers/bannerController");
const topsell = require("../controllers/topsellController");
const contact = require("../controllers/contactController");
const blog = require("../controllers/blogController");
const comment = require("../controllers/commentController");
const likedislike = require("../controllers/likeunlikeController");
const vendorstore = require("../controllers/vendorstoreController");
const feabanner = require("../controllers/feabannerController");
const mensController = require("../controllers/mensController");
const womenController = require("../controllers/womenController");
const kidData = require("../controllers/kidController");
const womenitemController = require("../controllers/womenitemController");
const womentshirt = require("../controllers/womentshirtController");
const kidtshirt = require("../controllers/kidtshirtController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
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
router.post("/api/v1/vehicledocument", vehicleDocument.vehicleDocumentData);

//tax
router.post("/api/v1/tax", tax.taxData);
router.get("/api/v1/tax", tax.taxget);
router.delete("/api/v1/tax/:_id", tax.taxDelete);
router.put("/api/v1/tax/:_id", tax.taxUpdate);

//vendor registor
router.post("/api/v1/vendorReg", vendorReg.vendorRegister);
router.post("/api/v1/vendorlog", vendorReg.vendorlogin);

//order
router.post("/api/v1/order", order.order);

//best Sell;
router.post("/api/v1/bestsell", upload.fields([{ name: "bestsell", maxCount: 1 }]), bestSell.bestSellPost);
router.get("/api/v1/bestsell", bestSell.bestSellGet);


//daydeal
router.post("/api/v1/daydeal", upload.fields([{ name: "image", maxCount: 1 }]), daydeal.daydealPost);
router.get("/api/v1/daydeal", daydeal.bestSellGet);


//banner
router.post("/api/v1/banner", upload.fields([{ name: "image", maxCount: 1 }]), banner.bannerPost);
router.get("/api/v1/banner", banner.bannerGet);


//topsell
router.post("/api/v1/topsell", upload.fields([{ name: "image", maxCount: 1 }]), topsell.topsellPost);
router.get("/api/v1/topsell", topsell.topsellGet);


//contact 
router.post("/api/v1/contact", contact.contactPost);

//blogs
router.post("/api/v1/blog", upload.fields([{ name: "image", maxCount: 1 }]), blog.blogpost);
router.get("/api/v1/blog", blog.blogGet);

//comment
router.post("/api/v1/comment", comment.commentPost);
router.get("/api/v1/comment", comment.commentGet);

//likedislike
router.post("/api/v1/like", likedislike.like);
router.post("/api/v1/unlike", likedislike.unlike);
router.get("/api/v1/like", likedislike.likeGet);


//vendorstore ;
router.post("/api/v1/vendorstore", upload.fields([{ name: "image", maxCount: 1 }]), vendorstore.vendorstorePost);
router.get("/api/v1/vendorstore", vendorstore.vendorstoreGet);


//feabanner ;
router.post("/api/v1/feabanner", upload.fields([{ name: "image", maxCount: 1 }]), feabanner.feabannerPost);
router.get("/api/v1/feabanner", feabanner.feabannerGet);

//mens;
router.post("/api/v1/mens", upload.fields([{ name: "image", maxCount: 1 }]), mensController.mensModelPost);
router.get("/api/v1/mens", mensController.mensModelGet);


//women 
router.post("/api/v1/women", upload.fields([{ name: "image", maxCount: 1 }]), womenController.womenDataPost);
router.get("/api/v1/women/:slug", womenController.womenDataGet);

//kid
router.post("/api/v1/kid", upload.fields([{ name: "image", maxCount: 1 }]), kidData.kidDataPost);
router.get("/api/v1/kid/:slug", kidData.kidDataGet);

//womenitem 
router.post("/api/v1/womenitem", upload.fields([{ name: "image", maxCount: 1 }]), womenitemController.womenitemPost);
router.get("/api/v1/womenitem/:slug", womenitemController.womenitemGet);

//womentshirt 
router.post("/api/v1/womentshirt", upload.fields([{ name: "image", maxCount: 1 }]), womentshirt.womentshirtPost);
router.get("/api/v1/womentshirt/:slug", womentshirt.womentshirtGet)


//kidtshirt
router.post("/api/v1/kid/tshirt", upload.fields([{ name: "image", maxCount: 1 }]), kidtshirt.kidtshirtPost);
router.get("/api/v1/kid/tshirt/:slug", kidtshirt.kidtshirtGet);


module.exports = router;