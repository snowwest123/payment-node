// 用户控制器
// src/user-service/controllers/userController.js
import { register, login } from '../services/userService.js';

export const registerUser = async (req, res) => {
  try {
    const newUser = await register(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await login(username, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
