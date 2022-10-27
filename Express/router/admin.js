const express=require('express');

const path=require('path');
const router=express.Router();

 
  router.get('/', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','user.html'));
  })
 
 router.get('/add',(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../','view','adduser.html'));
 
 })
 router.post('/user/add', (req,res)=>{
    console.log(req.body.username);
    res.redirect('/')
 })


module.exports=router;