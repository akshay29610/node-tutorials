import { Router } from "express";
export const User = Router()
User.get('/create',(req,res):void=>{
res.status(200).send('<h1>Get Users</h1>')
})