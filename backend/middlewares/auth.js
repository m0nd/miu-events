const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const key = process.env.JWT_SECRET;
const generateToken = ({ id }) => jwt.sign({ id }, key, { expiresIn: "2h" });

module.exports = generateToken;
