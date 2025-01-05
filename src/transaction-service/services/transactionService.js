// 交易服务（如发起交易等）

import Transaction from '../models/Transaction.js';

export const initiateTransaction = async (transactionData) => {
  const { userId, amount, type } = transactionData;

  const transaction = await Transaction.create({ userId, amount, type });
  return transaction;
};