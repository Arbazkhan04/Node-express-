const express=require('express');
const rootDir=require('../utlis/path')

const path=require('path');
const router=express.Router();

 
  router.get('/', (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','user.html'));
  })
 
 router.get('/add',(req,res,next)=>{

    res.sendFile(path.join(rootDir,'views','adduser.html'));
 
 })
 router.post('/user/add', (req,res)=>{
    console.log(req.body.username);
    res.redirect('/')
 })


module.exports=router;