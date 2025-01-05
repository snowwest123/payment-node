import express from "express";
import axios from "axios";
// import { authenticate } from "../middleware/jwtMiddleware";
// const authenticate = require('../middleware/authenticate');

const USER_BASEURL = process.env.USER_BASEURL;
const TRANSACTION_BASEURL = process.env.TRANSACTION_BASEURL;

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      const response = await axios.post(`${USER_BASEURL}/api/register`, req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('User service error');
    }
});
  
router.post('/transactions', async (req, res) => {
    try {
        const response = await axios.post(`${TRANSACTION_BASEURL}/api/transactions`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Transaction service error');
    }
});

export default router;