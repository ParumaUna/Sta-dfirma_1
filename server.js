const express = require('express');
const mongoose = require ('mongoose');
const Product = require('./models/productModels');
const app = express();

app.use(express.json);

//routes

app.get('/', (req,res) =>{
    res.send('Hello node API')
})
app.get('/blog', (req,res) =>{
    res.send('Hello blog')
})
app.post('/product', async(req,res) =>{
   try{
    const product = await Product.create(req.body)
    res.status(200).json(product);

   } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
   }
})


mongoose.connect('mongodb+srv://admin123:admin123@cluster0.7wpcxfc.mongodb.net/stadfirma?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, ()=>{
        console.log('Node API app is running on port 3000')
    });
    console.log('Conected to MongoDB');
}).catch((error) => {
    console.log(error);
})