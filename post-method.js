const http=require('http')
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
    return res.end(`<h1>good</h1>
    
    `)
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