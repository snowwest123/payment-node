import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/jwtUtils.js';

export const register = async (userData) => {
  const { username, password } = userData;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    password: hashedPassword,
  });

  await newUser.save();
  return newUser;
};

export const login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('User not found');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error('Invalid password');

  const token = generateToken(user);
  return { user, token };
};