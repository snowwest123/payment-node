// 交易服务（如发起交易等）

import Transaction from '../models/Transaction.js';

export const initiateTransaction = async (transactionData) => {

  try {
    const { userId, amount, type } = transactionData;
    console.log(transactionData, 'transactionData');
  
    const transaction = await Transaction.create({  userId, amount, type });
  
    return transaction;
  } catch (error) {
    console.error('Error creating transaction:', error);
  }

};

export const findAllTransactions = async () => {
  const transactions = await Transaction.findAll();
  return transactions;
};