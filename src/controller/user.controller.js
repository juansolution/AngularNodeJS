const User = require("../models/users"); 

const userCtrl = {};

userCtrl.getUsers = async (req,res)=>{
   
    const user = await User.find();
    res.json(user);
};

userCtrl.createUsers= async (req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.json({status: "operacion exitosa"});
};

module.exports = userCtrl;