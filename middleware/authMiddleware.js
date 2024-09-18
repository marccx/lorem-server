const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  // Add logic to verify token
  // if (token is valid) -> call next()
  // else -> return res.status(403).json({ message: 'Forbidden' });

  next();
};

module.exports = authMiddleware;
