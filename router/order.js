const express=require('express')
const controllerOrder=require('../controller/order')
const router=express.Router();
//read all
router.get("/",controllerOrder.GetAllOrder)
// router.post("/addUser",controllerOrder.AddUser);
// router.put("/updateUser",controllerOrder.UpDate);
// router.delete("/deleteUser:code",controllerOrder.DeleteUserById);
// router.get("/getUser:userName/password:password",controllerOrder.GetByUserName);

module.exports=router;