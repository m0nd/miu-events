const mongoose = require("mongoose");
const Event = require("../models/Event");

// Create event
module.exports.createEvent = (req, res) => {
  const {
    title,
    description,
    category,
    eventDate,
    price,
    address,
    organizer,
    location,
  } = req.body;
  const event = new Event({
    _id: mongoose.Types.ObjectId(),
    title,
    description,
    category,
    eventDate,
    price,
    address,
    organizer,
    location,
  });
  return event
    .save()
    .then((data) => {
      return res.status(201).json({
        success: true,
        message: "New event created successfully",
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
};

// Get All Events
module.exports.getAllEvents = async (req, res) => {
  try {
    const data = await Event.find({});
    return res.status(200).json({
      success: true,
      message: "Retrieved List of Events",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Failure. Try later ...",
    });
  }
};

// Update Event
module.exports.updateEvent = async (req, res) => {
  const id = req.params.eventId;
  const updateData = req.body;

  try {
    await Event.updateOne({ _id: id }, { $set: updateData });

    return res.status(200).json({
      success: true,
      message: "Event Updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Updated failed. Try later ...",
    });
  }
};

// Delete event
module.exports.deleteEvent = async (req, res) => {
  try {
    const id = req.params.eventId;
    await Event.findByIdAndRemove(id);
    res.status(200).json({
      success: true,
      message: "Event Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Couldn't delete resource. Try again later ...",
    });
  }
};

// Get recent 8 events
module.exports.getRecentEvents = async (req, res) => {
  const { numberOfEvents } = req.params;
  try {
    const data = await Event.find({})
      .sort({ startDate: -1 })
      .limit(parseInt(numberOfEvents));

    return res.status(200).json({
      success: true,
      message: "Retrieved List of Events",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Failure. Try later ...",
    });
  }
};

// Filter events by multiple conditions
module.exports.filterEvents = async (req, res) => {
  const filterCondition = req.query;

  try {
    const filteredEvents = await Event.find(filterCondition, {
      title: 1,
      description: 1,
      address: 1,
      price: 1,
      organizer: 1,
    }).populate("organizer", { firstname: 1, lastname: 1, email: 1 });

    res.status(200).json({
      success: true,
      message: "Here are the events that match your filters",
      data: filteredEvents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server failure. Try later ...",
    });
  }
};
