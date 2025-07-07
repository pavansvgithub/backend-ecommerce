// 🔐 Role-Based Access Middleware (Optional)
// middleware/roleMiddleware.js
const checkRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
module.exports = checkRole;
