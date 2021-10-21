import express = require('express');
const app = express();
const PORT:number = 3000
app.use((req,res,next)=>{
    console.log(`from first middleware`);
    next()
})
app.use((req,res,next)=>{
    console.log(`from second middleware`);
})

app.listen(PORT,()=>{
    `server up at port no ${PORT}`
})