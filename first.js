const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const static = path.join(__dirname,"public");

app.use(express.static(static));
console.log(static);
app.listen(port,()=>{
    console.log(`${port}`);
})