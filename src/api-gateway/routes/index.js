import express from "express";
import axios from "axios";
import { authenticate } from "../middleware/jwtMiddleware.js";

const USER_BASEURL = process.env.USER_BASEURL;
const PAYMENT_BASEURL = process.env.PAYMENT_BASEURL;
const TRANSACTION_BASEURL = process.env.TRANSACTION_BASEURL;

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      const response = await axios.post(`${USER_BASEURL}/api/register`, req.body);
      res.json(response.data);
    } catch (error) {
      res.status(400).send(error?.response?.data?.message || 'User service error');
    }
});

router.post('/login', async (req, res) => {
  try {
    const response = await axios.post(`${USER_BASEURL}/api/login`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(400).send(error?.response?.data?.message || 'login service error');
  }
});
  
router.post('/pay', authenticate, async (req, res) => {
    try {
        const response = await axios.post(`${PAYMENT_BASEURL}/api/pay`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error?.response?.data?.message || 'pay service error');
    }
});
router.post("/findAllOrder", authenticate, async (req, res) => {
	try {
		const response = await axios.post(
			`${TRANSACTION_BASEURL}/api/findAllOrder`,
			req.body
		);
		res.json(response.data);
	} catch (error) {
		res.status(500).send(
			error?.response?.data?.message || "find all record service error"
		);
	}
});

export default router;