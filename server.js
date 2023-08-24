const express=require('express');
const bodyParser=require('body-parser');
// const routerItem=require('./router/item');
const routerUser=require('./router/user');
const routerOrder=require('./router/order');
const routerProduct=require('./router/product');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const app=express();
const cors=require("cors");


dotenv.config();
console.log(process.env.URL)
app.use(express.static("public"))

//const port ="4545";
///DB 
const db=require('./model');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };


  db.mongoose.connect(process.env.URL,options)
.then(() => {
    console.log("Connected to the database!");
})
.catch(err => {
    console.log("Cannot connect to the database!", err);
    ///
    process.exit();
});

app.use(bodyParser.json());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT ,()=>console.log("server is up "+process.env.PORT ));

app.get("/",(req,res)=>{res.send("hello server")});
app.use("/api/product",routerProduct);
app.use("/api/user",routerUser);
app.use("/api/order",routerOrder);
