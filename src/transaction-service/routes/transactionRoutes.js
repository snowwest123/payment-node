// 交易路由

import {createTransaction} from '../controllers/transactionController.js';
import express from 'express';
const router = express.Router();

router.post('/transaction', createTransaction);

export default router;