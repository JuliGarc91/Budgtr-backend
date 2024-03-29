// depedencies
const express = require('express');
const cors = require('cors');
// config
const app = express();

const transactionsController = require('./controllers/transactions.controller');

//middleware packages
app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.status(200).json({"message" : "Hello"})
})
app.use('/transactions', transactionsController);

//404 page
app.get('*',(req,res) => {
    res.status(404).json({ error: "Page not found :-(" })
})

module.exports = app;