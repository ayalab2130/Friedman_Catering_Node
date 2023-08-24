const express=require('express')
const controllerProduct=require('../controller/product')
const router=express.Router();
//read all
router.get("/",controllerProduct.GetAllProduct)
router.post("/addProduct",controllerProduct.AddProduct);
router.put("/updateProduct",controllerProduct.UpDate);
router.delete("/deleteUser:code",controllerProduct.DeleteProductById);
// router.get("/getUser:userName/password:password",controllerProduct.GetByUserName);

module.exports=router;