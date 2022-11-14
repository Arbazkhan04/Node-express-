const express=require('express')
const router=express.Router();

const productData=require("../controller/productMangementController")

router.post("/productData",productData)


module.exports=router


//Everyuthing will called inside the router 