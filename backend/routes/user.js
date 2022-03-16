const express = require("express");

const verifyToken = require("../middlewares/verifyToken");
const { getAllUsers, login, signup } = require("../controllers/userController");

const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
