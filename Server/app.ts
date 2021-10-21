import express = require ('express')
import { User } from './routes/user';
import { Product } from './routes/product';
const app = express();
const PORT:number = 3000;
app.use(express.json());
app.use(User)
app.use(Product)
app.listen(PORT,():void=>{
    console.log(`server up a port ${PORT}`);
})
