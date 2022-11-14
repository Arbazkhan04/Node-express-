const productData=(req,res)=>{
    try {
        res.json({
           Message:"You have reached the api endpoint ",
           Body:req.Body
        })      
    } catch (error) {
        res.json({
            Message:"Error cant able to reached the endpoint",
            Body:null
        })
        
    }error
}

module.exports={
    productData
}