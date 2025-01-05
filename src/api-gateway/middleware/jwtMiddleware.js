import jwtUtils from '../utils/jwtUtils';

export const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token is required' });
  try {
    const decoded = jwtUtils.verifyToken(token);
    req.userId = decoded.id;
    next();
    console.log('Decoded Token:', decoded);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      }
      return res.status(401).json({ message: 'Invalid token' });
  }
};