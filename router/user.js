const express=require('express')
const controlleruser=require('../controller/user')
const router=express.Router();
//read all
router.get("/",controlleruser.GetAllUser)
router.post("/addUser",controlleruser.AddUser);
router.put("/updateUser",controlleruser.updateUser);
router.put("/updateUser",controlleruser.UpDate);
router.put("/updateCartUser",controlleruser.UpDateCart);
router.delete("/deleteUser:code",controlleruser.DeleteUserById);
router.get("/getUser:userName/password:password",controlleruser.GetByUserName);

module.exports=router;