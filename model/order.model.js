const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(

    {
        orderId:{
            type:String,
            required:[true,'code is required'],
            index:true,
            unique:true,
        },
        orderDate:{
            type:Date,
        },
        DueDate:{
            type:Date,
        },
        user:{
            userName:String,
            email:String,
            city:String,
            street:String ,
            home:Number
        },
        cart:[{productId:{type:Number},qty:{type:Number},name:{type:String},price:{type:Number}}],
        
    })


    orderSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    //create object 
const Orders = mongoose.model('Orders',orderSchema);
//create colection 
Orders.createCollection().then(function (collection) {
    console.log('Collection Orders is created!');
});
Orders.createIndexes();
module.exports  = Orders;
