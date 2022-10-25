const express=require('express')
const app=express() 
app.listen(3000,()=>{
    console.log("Server is started at the port 3000...");
})

// const http=require('http') same thing we can throgh the expressjs 
// const server=http.createServer((req,res)=>{
    
// })
// server.listen(3000,()=>{
//     console.log('Server is started at the port 3000...')
// })