const express=require("express")
const app=express()
const port=8000
app.get("/",(req,res)=>{
res.end("hello this is my page")
})
app.get("/HOME",(req,res)=>{
    res.end("hello")
    })
    app.get("/ABOUT",(req,res)=>{
        res.end("my page")
        })
app.listen(port,()=>
{
    console.log("server created")
});
app.post("/contact",(req,res)=>{
    res.end("kamakshi")
})
