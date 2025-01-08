// 交易路由

import {createTransaction, findAllTransactionsCon} from '../controllers/transactionController.js';
import express from 'express';
const router = express.Router();

router.post('/createTransaction', createTransaction);

router.post('/findAll', findAllTransactionsCon);

export default router;