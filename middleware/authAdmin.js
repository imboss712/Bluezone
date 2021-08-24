// Authentication middleware for admin
const authAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(403).send({
      errors: [{ msg: 'You are not an Admin' }]
    });
  }
};

module.exports = authAdmin;
