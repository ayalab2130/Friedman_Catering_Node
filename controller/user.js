const { parse } = require('dotenv');
const express =require('express');
// const { users } = require('../model/index');
// const { users } = require('../model/index').users;
const db=require("../model/index");
const user=db.users;

async function  newId(){
    let doc= await user.find({}).sort({_id:-1}).limit(1);
    if (doc.length==0)
        return 1;
    let id=doc[0].userID;
    return id +1;

}


async function  GetAllUser(req,res){
    let allData=await user.find({});
    // res.setHeader("Access-Control-Allow-Origin", "*");
    //  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With"); 
    //  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); 
    //  res.setHeader("X-Powered-By",' 3.2.1');
    //  res.setHeader("Content-Type", "application/json;charset=utf-8")
    res.status(200).send(allData)
  
}

// async function AddUser(req,res)
// {
// console.log("i come to add user")
//     let userAdd=req.body;
//     console.log(userAdd)
   
//     let user_=await user.find({"userName":userAdd.userName});
//     console.log(user_)
//     if(user_.length==0)
//     {
//         try
//         {
            
//             // add userId for user_
//     //check the type of fileds.
//     userAdd.userID=newId();
//             let doc = await user.create(userAdd)
//             res.status(200).send(doc);
//         }
//         catch(err)
//         {
//             console.log(err)
//             res.status(500).send(err);
//         }
//     }
//     else
//     {
//         res.status(400).send("משתמש קים")
        
//     }

// }



async function AddUser(req,res)
{
console.log("i come to add user")
    let userAdd=req.body;
    console.log(userAdd)
   
    let user_=await user.find({"userName":userAdd.userName});
    console.log(user_)
    if(user_.length==0)
    {
        try
        {            
            // add userId for user_
    //check the type of fileds.
    userAdd.userID= await newId();
    // let add={city:userAdd.city,street:userAdd.street,home:parse.Int(userAdd.home)}
    let add={city:userAdd.city,street:userAdd.street,home:parseInt(userAdd.home)}
    userAdd.addresss=add;
    userAdd.role="user";
    console.log(userAdd)
            let doc = await user.create(userAdd)   
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
        res.status(400).send("משתמש קים") 
    }
}

async function UpDate(req,res)
{
    try{
    let userUpDate=req.body ;
    user.findOneAndUpdate({ userID: userUpDate.userID}, userUpDate).then(function(){
        res.status(200).send("עודכן  בהצלחה!")
    });}
    catch(ex)
        {
            res.status(500).send(ex);
        }

  // let res=await user.UpDate({"userID":userUpDate.userID},{$set:{"password":userUpDate.password}});      

}


async function UpDateCart(req,res)
{
    let item=req.body ;
    try{
    console.log("i comr to UpDateCart", item )
    user.findOneAndUpdate({ userID: item.userID}, {ShoppingCart:item.cart}).then(function(){
        res.status(200).send("עודכן  בהצלחה!")
    });
    }
    catch(ex)
        {
            res.status(500).send(ex);
        }

  // let res=await user.UpDate({"userID":userUpDate.userID},{$set:{"password":userUpDate.password}});      

}

async function DeleteUserById(req,res)
{
    try{
        
        user.findOneAndDelete({userID:req.params.userID}).then(function(){
            
            res.status(200).send("נמחק בהצלחה!")
        })}
        catch(ex)
        {
            res.status(500).send(ex);
        }

    }

async function GetByUserName(req,res)

{
    console.log("enter to getByUserName");
    
    let user_=req.params;
    try
    {
        
        let data =await user.find({"userName":user_.userName,"password":user_.password})
        res.send(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }

}

async function updateUser(req,res)
{
    try{
    let userUpDate=req.body ;
    
await user.findOneAndUpdate({ userID: userUpDate.userID}, userUpDate)
    let doc=await user.find({userID:userUpDate.userID});
    res.status(200).send(doc[0]);
    }
    catch(ex)
        {
            res.status(500).send(ex);
        }

  // let res=await user.UpDate({"userID":userUpDate.userID},{$set:{"password":userUpDate.password}});      

}





module.exports={AddUser,GetByUserName,DeleteUserById,UpDate,GetAllUser,UpDateCart,updateUser};