// depedencies
const express = require('express');
const cors = require('cors');
// config
const app = express();

const transactionsController = require('./controllers/logs.controller');

//middleware packges
app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.status(200).json({"message" : "Hello"})
})
app.use('/transactions', transactionsController);

module.exports = app;