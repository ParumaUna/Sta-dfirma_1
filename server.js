const express = require('express');
const mongoose = require ('mongoose');
const app = express();

//routes

app.get('/', (req,res) =>{
    res.send('Hello node API')
})
app.get('/blog', (req,res) =>{
    res.send('Hello blog')
})


app.listen(3000, ()=>{
    console.log('Node API app is running on port 3000')
})

mongoose.connect('mongodb+srv://admin123:admin123@cluster0.7wpcxfc.mongodb.net/stadfirma?retryWrites=true&w=majority')