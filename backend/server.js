import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import products from "./data/products.js";
const PORT = process.env.PORT || 5000;
const app = express();

connectDb();

app.get('/',(req,res)=>
{
    res.send("hello");
});
app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p) => p._id === Number(req.params.id));
    res.json(product);
});
app.listen(PORT,()=>{
    console.log(`server listing on port:${PORT}`);
})