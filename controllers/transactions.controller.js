const express = require('express');
const transactions = express.Router();
const transactionsData = require("../models/transactions.model");

transactions.get('/',(req,res)=>{
    res.status(200).json({transactions: transactionsData})
});

// get one transaction by id
transactions.get('/:id', (req,res) => {
    const { id } = req.params;
    const selectedTransaction = transactionsData.find(transaction => transaction.id === +id);
    selectedTransaction ? res.status(200).json(selectedTransaction) : res.status(400).json({ message: `Transaction with ID ${id} not found. :'-(` })
});

module.exports = transactions;