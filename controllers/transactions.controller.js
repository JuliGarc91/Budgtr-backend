const express = require('express');
const transactions = express.Router();
let transactionsData = require("../models/transactions.model");

// ---- HTTP Functions ----
// http fx get all transactions - can be viewed in Browser
const getAllTransactions = (req,res) => {
    res.status(200).json({transactions: transactionsData})
};

// get one transaction by id - can be viewed in Browser
const getTransactionById = (req,res) => {
    const { id } = req.params;
    const selectedTransaction = transactionsData.find(transaction => transaction.id === +id);
    selectedTransaction ? res.status(200).json(selectedTransaction) : res.status(400).json({ message: `Transaction with ID ${id} not found. :'-(` })
}

// create resource and add unique id to it - test with cURL
const createTransaction = (req, res) => {
    
    const newId = transactionsData.length > 0 ? transactionsData[transactionsData.length -1].id + 1 : 1;
    req.body.id = newId;
    req.body.date = new Date(req.body.date); // Convert date string to Date object
    transactionsData.push(req.body);
    res.json({ transactions: transactionsData });
}

// update resource by id - test with cURL
const updateTransactionById = (req, res) => {
    const { id } = req.params;
    const transactionIndex = transactionsData.findIndex((transaction) => transaction.id === +id);
    // if not falsy
    if (transactionIndex > -1) transactionsData[transactionIndex] = req.body; // in frontend setTransaction data (useState hook) will reset the state of the data so the data needs to be sent back
    res.json({ transactions: transactionsData });
}

// delete transaction by id
const deleteTransactionById = (req, res) => {
    const { id } = req.params;
    transactionsData = transactionsData.filter((transaction) => transaction.id !== +id); // used to return everything except the one with matching id
    res.json({ transactions: transactionsData })
}

// ---- HTTP Routes ----
transactions.route('/')
    .get(getAllTransactions)
    .post(createTransaction);

transactions.route('/:id')
    .get(getTransactionById)
    .put(updateTransactionById)
    .delete(deleteTransactionById);

module.exports = transactions;