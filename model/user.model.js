const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(

    {
        userID: {
            type: Number,
            require:true,
            index:true
            ,unique:true
        },
        userName:{
            type:String,
            minLength:3
        },
        password:{
            type:String,
            minLength:8,
            required: [true, '[paswword] field is required']
            ,unique:true
            ,index:true  
        },
        email:{
            type:String ,
            required: true,
            indexes:true,
            // pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
            // match:"/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/",
        },
        role:{
            type: String,
            enum:["director","user"],

        },
        addresss:{
            city:{type:String,require:true},
            street:{type:String,require:true},
            home:{type:Number,require:true}
        },
        ShoppingCart:[{productId:{type:Number},name:{
            type:String},qty:{type:Number},description:{type:String},
            image:{type:String},
            price:{type: Number},
            category:{type: String,}}]
    })


    userSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    //create object 
const Users = mongoose.model('Users',userSchema);
//create colection 
Users.createCollection().then(function (collection) {
    console.log('Collection User is created!');
});
Users.createIndexes();
module.exports  = Users;
