const express=require('express');
const rootDir=require('../utlis/path')
const path=require('path')
const router=express.Router();

  router.get('/', (req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','home.html')) //now it is work fine
})

module.exports=router;