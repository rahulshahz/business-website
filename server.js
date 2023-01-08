var express=require("express")
const app =express()





app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.use(express.json({extended:false}))

app.post('/',(req,res)=>{
    res.send(`Hello ${req.body.name}`);
})

app.listen(9000,()=> console.log("Server started at port 8000!"))