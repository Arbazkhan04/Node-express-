//Entry point of my application

const express=require("express");
const router = require("./Routes/ProductManagementRoute");
const app=express();
const port=3200;




// calling my router
const ProductManagementRoute=require('./Routes/ProductManagementRoute')
// calling my router


app.use('ProductMangementRoute',ProductManagementRoute);



app.listen(port,()=>{
    console.log(`Your server is listening at Port:${port}`)
})
