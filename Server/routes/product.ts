import { Router } from "express";
export const Product = Router()
Product.get('/product',(req,res):void=>{
res.status(200).send('<h1>Get Product</h1>')
})