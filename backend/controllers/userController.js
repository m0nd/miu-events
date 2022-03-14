const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const generateToken = require("../middlewares/auth");

// create new user
module.exports.signup = (req, res) => {
  let { firstname, lastname, email, password } = req.body;
  bcrypt.hash(password, 8, (err, hash) => {
    password = hash;
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      firstname,
      lastname,
      email,
      password,
    });

    // check that required values are submitted
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Required fields can't be empty",
      });
    }

    // Check if user already exists in DB
    User.count({ email }).then((count) => {
      if (count > 0) {
        return res.status(401).json({
          success: false,
          message: "User already exists",
        });
      }

      //if user doesn't exist, create one
      user
        .save()
        .then((data) => {
          const token = generateToken(data);
          res.status(200).json({
            success: true,
            message: "New User Created Successfully",
            token,
          });
        })
        .catch((error) => {
          res.status(500).json({
            success: false,
            message: error,
          });
        });
    });
  });
};

// Authenticate incoming user
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  let existingUser = await User.findOne({ email });

  // Check if user exists
  if (!existingUser) {
    return res.status(401).json({
      success: false,
      message: "Invalid Login!",
    });
  }

  // Check if user password is correct
  const validPassword = await bcrypt.compare(password, existingUser.password);
  if (!validPassword) {
    return res.status(401).json({
      success: false,
      message: "Invalid Login!",
    });
  }
  const token = generateToken(existingUser);
  return res.status(200).json({
    success: true,
    message: "User Logged in Successfully",
    loggedinUser: {
      email: existingUser.email,
      _id: existingUser.id,
    },
    token,
  });
};

// Get all users
module.exports.getAllUsers = (req, res) => {
  User.find()
    .select("_id firstname lastname email")
    .then((data) => {
      return res.status(200).json({
        success: true,
        message: "List of all users",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
};
