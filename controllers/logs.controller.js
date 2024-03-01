const express = require('express');
const transactions = express.Router();
const transactionsData = require("../models/logs.model");

transactions.get('/',(req,res)=>{
    res.status(200).json({transactions: transactionsData})
});

module.exports = transactions;