const http=require('http')
const fs= require('fs')
const server=http.createServer((req,res)=>{
     if(req.url==='/'){
        return setHomePage(req,res)
     }
     if(req.url='/userName' && req.method.toLowerCase()==='post'){
        return submitUserName(req,res)
     }
})
function submitUserName(req,res ){
    res.setHeader('Content-type','text/html')
    const body=[];
    req.on('data', (chunks)=>{
      body.push(chunks)

    })
    req.on('end',()=>{
       console.log(body); //through this we will only get array on utc 
       //we hava to make it a string 
       const requestBody=Buffer.concat(body).toString();
       console.log(requestBody);//now it will convert our utc into string 
       const userName2=requestBody.split('=')[1];
       fs.writeFileSync('username.txt',userName2)

    })
    
    //recived request body
    //and save it in file
    //redirect to home page

    res.statusCode=320;
    res.setHeader('location','/')
     return res.end()
    
    
}
function setHomePage(req,res){
    res.setHeader('Content-Type','text/html');
   return res.end(`
   <!doctype html>
   <html>
   <head>
   <title>Dear khan</title>
   </head>
   <body>
   <form action='userName'  method="post">
   <label>Enter your name
   <input type='text' name='userName'>
   <input type='submit' value='send'>
   </body>
   </html>
   `)
}
server.listen(3000)