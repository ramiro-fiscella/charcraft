const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Espera que el token venga en el header Authorization: Bearer <token>
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Extraer el token (opcional: remover el prefijo "Bearer")
  const token = authHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Agrega la info del usuario a la request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
