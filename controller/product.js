const express =require('express');
// const { users } = require('../model/index');
// const { users } = require('../model/index').users;
const db=require("../model/index");
const product=db.products;



async function  newId(){
    let doc= await product.find({}).sort({_id:-1}).limit(1);
    if (doc.length==0)
        return 1;
    let id=doc[0].productId;
    return id +1;

}


async function  GetAllProduct(req,res){
    let allData=await product.find({});
    res.status(200).send(allData)
  
}

async function AddProduct(req,res)
{
    let productAdd=req.body;
    let product_=await product.find({"name":productAdd.name});
    if(product_.length==0)
    {
        try
        {
            let proId=await newId();
             productAdd.productId=proId;
             productAdd.image="http://localhost:4545/"+productAdd.image;
            let doc = await product.create(productAdd);

            res.status(200).send(doc);
        }
        catch(err)
        {
            console.log(err)
            res.status(500).send(err);
        }
    }
    else
    {
        res.status(400).send("מוצר קים")
        
    }

}

async function UpDate(req,res)
{
    
    let productUpdate=req.body ;
    productUpdate.image="http://localhost:4545/"+productUpdate.image;
    console.log("i come to update",productUpdate);
    try{
   await product.findOneAndUpdate({ productId: productUpdate.productId}, productUpdate)
   let doc=await product.find({productId:productUpdate.productId});
        res.status(200).send(doc[0]);
    }

    catch(ex)
        {
            res.status(500).send(ex);
        }

  // let res=await user.UpDate({"userID":userUpDate.userID},{$set:{"password":userUpDate.password}});      

}


async function DeleteProductById(req,res)
{
    try{
        console.log("i come to DeleteUserById")
        console.log(req.params)
       let doc= await product.findOneAndDelete({"productId":req.params.code})
            res.status(200).send(doc)
        }
        catch(ex)
        {
            res.status(500).send(ex);
        }

    }








module.exports={GetAllProduct,AddProduct,DeleteProductById,UpDate};