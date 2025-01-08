//  JWT generateToken and verifyToken functions
import jwt from 'jsonwebtoken';

/**
 * 生成 JWT
 * @param {Object} user - userinfo
 * @param {string} secret - JWT signature
 * @param {Object} options - time
 * @returns {string} - genarate JWT
 */
export const generateToken = (user, secret = process.env.JWT_SECRET, options = { expiresIn: '1h' }) => {
  const payload = {
    id: user.id, // user ID
  };
  console.log(payload, 'req.body', secret);
  return jwt.sign(payload, secret, options);
};

/**
 * 验证 JWT
 * @param {string} token - client transfer JWT
 * @param {string} secret - JWT signature
 * @returns {Object} decode Token info
 * @throws {Error} - if Token expire throw error
 */
export const verifyToken = (token, secret = process.env.JWT_SECRET) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error(err.message || 'Invalid token');
  }
};

/**
 * decode JWT（no auth）
 * @param {string} token - client transfer JWT
 * @returns {Object} - decode Token info
 */
export const decodeToken = (token) => {
  return jwt.decode(token);
};