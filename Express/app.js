const express=require('express');
const rootDir=require('./utlis/path')

const path=require('path')
const AdminRouter=require('./router/admin')
const homeRouter=require('./router/home')
const bodyParser=require('body-parser')
const app=express() 

//ejs

app.set('view-engine','ejs'); //engien for ejs
app.set('views', path.join(__dirname, 'views')); //routing for ejs

// stactic files
app.use(express.static(path.join(__dirname,'public')))
app.use( '/css',express.static(path.join(rootDir,'node_modules','bootstrap','dist','css')))
app.use(bodyParser.urlencoded({extended:false}))

//routing
app.use((req,res,next)=>{
    console.log('logged message')
    next()
})
app.use('/user' , AdminRouter)
app.use(homeRouter)
app.use((req,res)=>{
    // const viewData={
    //     titlePage:"page not found"
    // }
    res.status(404).render('404');
})
// app.use('/',(req,res,next)=>{
   
//   res.send('first middle ware')
  
// })

// app.use('/user', (req,res,next)=>{
//     res.send('this is the user page') //at this point we are not able to get the /user content  because the '/' and '/user ' both first path is match 
    // '/' it will it will never go to user route that is way we are getting the response 
// })

// solution for this 





//server

app.listen(3000,()=>{
    console.log("Server is started at the port 3000...");
})





























































//middleware in Express js 
// app.use((req,res,next)=>{ //here if i don't use next method it will never go 
    //go to next middleware 
    // console.log('fisrt middleware')
    // next() //now it fine always use next method if you have a another middleware
// })
// app.use((req,res,next)=>{
//     console.log("second middlewware")
// })







// const http=require('http') same thing we can throgh the expressjs 
// const server=http.createServer((req,res)=>{
    
// })
// server.listen(3000,()=>{
//     console.log('Server is started at the port 3000...')
// })