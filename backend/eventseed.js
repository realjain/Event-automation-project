// seedEvents.js
const mongoose = require('mongoose');
const event_model = require('./models/event_model'); // adjust path
require('dotenv').config();

const events = [
  {
    title: "Tech Conference 2026",
    description: "Annual tech conference on AI, ML, and Web Development.",
    date_posted: new Date("2026-01-01"),
    event_date: new Date("2026-03-15"),
    Location: "New Delhi",
    RegisteredUsers: ["alice@example.com", "bob@example.com"],
    deadline: new Date("2026-03-10"),
    event_type: "conference"
  },
  {
    title: "Music Festival",
    description: "Live performances by top artists.",
    date_posted: new Date("2026-01-10"),
    event_date: new Date("2026-04-05"),
    Location: "Mumbai",
    RegisteredUsers: ["carol@example.com"],
    deadline: new Date("2026-04-01"),
    event_type: "festival"
  },
  {
    title: "Startup Pitch Day",
    description: "Pitch your startup ideas to investors.",
    date_posted: new Date("2026-02-01"),
    event_date: new Date("2026-05-20"),
    Location: "Bangalore",
    RegisteredUsers: [],
    deadline: new Date("2026-05-15"),
    event_type: "business"
  },
  {
    title: "Art Exhibition",
    description: "Exhibition of modern art from local artists.",
    date_posted: new Date("2026-01-20"),
    event_date: new Date("2026-04-25"),
    Location: "Pune",
    RegisteredUsers: ["dave@example.com", "eve@example.com"],
    deadline: new Date("2026-04-20"),
    event_type: "exhibition"
  },
  {
    title: "Coding Bootcamp",
    description: "Intensive coding bootcamp for beginners.",
    date_posted: new Date("2026-02-10"),
    event_date: new Date("2026-06-01"),
    Location: "Hyderabad",
    RegisteredUsers: ["frank@example.com"],
    deadline: new Date("2026-05-25"),
    event_type: "education"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await event_model.deleteMany({}); // optional: clear existing events
    await event_model.insertMany(events);
    console.log("Seeded events successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDB();