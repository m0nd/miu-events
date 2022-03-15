const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized to access this resource!",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "You are not authorized to access this resource!",
    });
  }
};
