const express = require("express");

const router = new express.Router();
const controllers = require("../controllers/userController");

router.post("/user/register" , controllers.userregister);

module.exports = router;