const express =require('express');
// const { users } = require('../model/index');
// const { users } = require('../model/index').users;
const db=require("../model/index");
const order=db.orders;


async function  GetAllOrder(req,res){
    let allData=await order.find({});
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Headers", "X-Requested-With"); 
     res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); 
     res.setHeader("X-Powered-By",' 3.2.1');
     res.setHeader("Content-Type", "application/json;charset=utf-8")
    res.status(200).send(allData)
  
}

async function AddOrder(req,res)
{
    let orderAdd=req.body;
        try
        {
            // add id
            // add orderAdd for order
            let doc = await order.create(orderAdd)
            res.status(200).send("ההזמנה הוסף בהצלחה!");
        }
        catch(err)
        {
            console.log(err)
            res.status(500).send(err);
        }
        
    }

  



// async function UpDate(req,res)
// {
//     try{
//     let UpDate=req.body ;
//     user.findOneAndUpdate({ userID: userUpDate.userID}, userUpDate).then(function(){
//         res.status(200).send("עודכן  בהצלחה!")
//     });}
//     catch(ex)
//         {
//             res.status(500).send(ex);
//         }

//   // let res=await user.UpDate({"userID":userUpDate.userID},{$set:{"password":userUpDate.password}});      

// }


// async function DeleteUserById(req,res)
// {
//     try{
//         user.findOneAndDelete({userID:req.params.userID}).then(function(){
//             res.status(200).send("נמחק בהצלחה!")
//         })}
//         catch(ex)
//         {
//             res.status(500).send(ex);
//         }

//     }

// async function GetByUserName(req,res)

// {
//     console.log("enter to getByUserName");
    
//     let user_=req.params;
//     res.setHeader("Access-Control-Allow-Origin", "*");
//      res.setHeader("Access-Control-Allow-Headers", "X-Requested-With"); 
//      res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); 
//      res.setHeader("X-Powered-By",' 3.2.1');
//      res.setHeader("Content-Type", "application/json;charset=utf-8")
//     try
//     {
//         let data =await user.find({"userName":user_.userName,"password":user_.password})
//         res.send(data);
//     }
//     catch(err)
//     {
//         res.status(500).send(err);
//     }

// }

// async function getByordId(req,res){
//     let ordId = req.params.ordId || req.query.ordId;
//     try{
//         let data=await order.find({"ordId":ordId});
//          if(data.length!=0)
//          res.send(data[0])
//         else
//           res.status(100).send("לא קיים כזה קוד מוצר");
//     }  
//     catch(err){
//         res.status(500).send(err)
//     }
//     }





module.exports={GetAllOrder,AddOrder};