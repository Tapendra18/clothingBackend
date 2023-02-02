const express = require("express");

const router = new express.Router();
const controllers = require("../controllers/userController");
// const logincontrollers = require("../controllers/userController");

router.post("/user/register" , controllers.userregister);
router.post("/user/login" , controllers.userlogin);

module.exports = router;