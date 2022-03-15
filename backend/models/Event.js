const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const eventSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    eventDate: {
      type: Date,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: [Number],
      required: true,
    },
    address: {
      type: String,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
eventSchema.index({ location: "2d" });

module.exports = mongoose.model("Event", eventSchema);
