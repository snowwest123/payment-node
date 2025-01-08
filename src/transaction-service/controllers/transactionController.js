// 交易控制器

import {initiateTransaction, findAllTransactions} from '../services/transactionService.js';

export const createTransaction = async (req, res) => {

  try {
    const transaction = await initiateTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const findAllTransactionsCon = async (req, res) => {
  try {
    const transaction = await findAllTransactions(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};