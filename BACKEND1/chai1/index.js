require('dotenv').config();

const express= require('express');
//OR
/* import express from "express" */
const app=express();
const PORT = process.env.PORT

app.get('/',(req,res,next)=>{
    res.send('hello world!')

})

app.get('/twitter',(req,res)=>{
    res.send("abhinav.com");
})

app.listen(PORT,()=>{

})

// THere is no hot reloading available in node, as a result if after 
// 