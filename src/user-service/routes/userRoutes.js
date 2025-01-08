// 用户路由
// src/user-service/routes/userRoutes.js
import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import validate from "../../config/validate.js";
import { body } from 'express-validator';
const router = express.Router();

const registerValidationRules = [
    body('username').isLength({ min: 5 }).withMessage('username must be at least 5 characters long'),
    body('password').notEmpty().withMessage('password must be valid')
];

router.post('/register', validate(registerValidationRules),  registerUser);

const loginValidationRules = [
    body('username').isLength({ min: 5 }).withMessage('username must be at least 5 characters long'),
    body('password').notEmpty().withMessage('password must be valid')
];

router.post('/login', loginValidationRules, loginUser);

export default router;