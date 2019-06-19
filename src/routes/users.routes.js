const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user.controller");

router.get("/",userCtrl.getUsers);
router.get("/id:",userCtrl.getOneUsers);
router.post("/",userCtrl.createUsers);
router.put("/",userCtrl.updateUsers);
router.delete("/",userCtrl.deleteUsers);


module.exports = router;


