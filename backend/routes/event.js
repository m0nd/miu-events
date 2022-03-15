const express = require("express");
const {
  createEvent,
  getAllEvents,
  getRecentEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

router.get("/", getAllEvents);
router.get("/recent/:numberOfEvents", getRecentEvents);
router.post("/", createEvent);
router.patch("/:eventId", updateEvent);
router.delete("/:eventId", deleteEvent);

module.exports = router;
