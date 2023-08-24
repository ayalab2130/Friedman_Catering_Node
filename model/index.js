
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;



const db = {};
db.mongoose = mongoose;
db.url = process.env.URL;
console.log("db url : "+db.url)
db.products = require("./product.model");
db.users=require("./user.model");
db.orders=require("./order.model");
module.exports = db;