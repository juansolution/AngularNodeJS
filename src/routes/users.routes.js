const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user.controller");

router.get("/",userCtrl.getUsers);


module.exports = router;


