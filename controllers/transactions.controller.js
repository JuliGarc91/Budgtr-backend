const express = require('express');
const transactions = express.Router();
const transactionsData = require("../models/transactions.model");

// get all transactions - can be viewed in Browser
transactions.get('/',(req,res)=>{
    res.status(200).json({transactions: transactionsData})
});

// get one transaction by id - can be viewed in Browser
transactions.get('/:id', (req,res) => {
    const { id } = req.params;
    const selectedTransaction = transactionsData.find(transaction => transaction.id === +id);
    selectedTransaction ? res.status(200).json(selectedTransaction) : res.status(400).json({ message: `Transaction with ID ${id} not found. :'-(` })
});

// create resource and add unique id to it - test with cURL
transactions.post('/', (req, res) => {
    const newId = transactionsData[transactionsData.length -1].id + 1;
    req.body.id = newId;
    transactionsData.push(req.body);
    res.json({ transactions: transactionsData });
})

// update resource by id - test with cURL
transactions.put('/:id', (req, res) => {
    const { id } = req.params;
    const transactionIndex = transactionsData.findIndex((transaction) => transaction.id === +id);
    // if not falsy
    if (transactionIndex > -1) transactionsData[transactionIndex] = req.body; // in frontend setTransaction data (useState hook) will reset the state of the data so the data needs to be sent back
    res.json({ transactions: transactionsData });
});

transactions.delete('/:id', (req, res) => {
    const { id } = req.params;
    const newTransactionsData = transactionsData.filter((transaction) => transaction.id !== +id); // used to return everything except the one with matching id
    res.json({ transactions: newTransactionsData })
})

module.exports = transactions;