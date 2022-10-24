const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){ //if url is home page i mean mt then it will response to the reque
    return setHomepage(req,res)
  }

    
})
function setHomepage(req,res){
  res.setHeader('Content-type','text/html');
  res.write('<html>');
  res.write('<head><title>Dear khan</title><head>');
  res.write('<body><h1>AssalamAlaikum2</h1></body>');
  return  res.end('</html>');
}
server.listen(3000)

