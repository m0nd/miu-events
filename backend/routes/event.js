const express = require("express");

const verifyToken = require("../middlewares/verifyToken");
const {
  createEvent,
  getAllEvents,
  getRecentEvents,
  updateEvent,
  deleteEvent,
  filterEvents,
  searchEvents,
} = require("../controllers/eventController");

const router = express.Router();

router.get("/", getAllEvents);
router.get("/recent/:numberOfEvents", getRecentEvents);
// router.get("/filter", filterEvents);
router.post("/", createEvent);
// router.post("/", verifyToken, createEvent);
router.get("/search", searchEvents);
router.patch("/:eventId", verifyToken, updateEvent);
router.delete("/:eventId", verifyToken, deleteEvent);

module.exports = router;
