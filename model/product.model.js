const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(

    {
        productId: {
            type: Number,
            require:true,
            index:true
            ,unique:true
        },
        name:{
            type:String,
            require:true,
            index:true
            ,unique:true
        },
        description:{
            type:String, 
        },
        image:{
            type:String ,
        },
        price:{
            type: Number,

        },
        category:{
                type: String,
                enum:["בשרים","דגים","סלטים","תוספות"]}
    })


    productSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    //create object 
const Product = mongoose.model('Product',productSchema);
//create colection 
Product.createCollection().then(function (collection) {
    console.log('Collection Product is created!');
});
Product.createIndexes();
module.exports  = Product;
