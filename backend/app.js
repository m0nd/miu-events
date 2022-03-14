const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const rfs = require("rotating-file-stream");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config(path.join(__dirname, "./.env"));

const DB_NAME =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DB_NAME
    : process.env.DB_NAME;

const DB_URL =
  process.env.DB_URL ||
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.2mxxu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// Initialization
const app = express();

// create a rotating write stream
let accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

// Configuration
app.disable("x-powered-by");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("combined", { stream: accessLogStream }));

// Connect to db
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to DB ...");
  })
  .catch(() => {
    console.log("Error connecting to database");
  });

// Routes
const userRoutes = require("./routes/user");
// const eventRoutes = require("./routes/event");
app.use("/api/users", userRoutes);
// app.use("/api/events", eventRoutes);

// Error Handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message,
    error: {},
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Listening on port ${PORT} ...`));
