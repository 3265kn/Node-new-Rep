const express=require("express");
const kamakshi=express();
const fs=require("fs");
const port=8000;
kamakshi.get("/",(req,res)=>{
fs.readFile("hii.html",'utf-8',(err,data)=>{
    const modifiedContent=data.replace('hello','there');
    res.end(modifiedContent);
})
})
kamakshi.listen(port,()=>{
    console.log(`you server is starting in ${port}`);
})

