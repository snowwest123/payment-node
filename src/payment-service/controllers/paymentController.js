// 支付控制器
import { processPayment } from '../services/paymentService.js';

export const createPayment = async (req, res) => {
  try {
    const payment = await processPayment(req.body.amount);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};