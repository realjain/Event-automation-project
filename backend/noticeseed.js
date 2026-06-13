// seedNotices.js
const mongoose = require('mongoose');
const Notice = require('./models/notice_model'); // adjust path if needed
require('dotenv').config();

const notices = [
  {
    title: "Library Maintenance",
    date_posted: new Date("2026-02-01"),
    deadline: new Date("2026-02-10"),
    description: "The library will be closed for maintenance. Please return borrowed books before the deadline."
  },
  {
    title: "Exam Schedule Released",
    date_posted: new Date("2026-02-05"),
    deadline: new Date("2026-02-20"),
    description: "The schedule for the upcoming semester exams has been released. Check the student portal for details."
  },
  {
    title: "Sports Meet Registration",
    date_posted: new Date("2026-02-08"),
    deadline: new Date("2026-02-25"),
    description: "Registrations are open for the annual inter-college sports meet. Submit your forms before the deadline."
  },
  {
    title: "Guest Lecture on AI",
    date_posted: new Date("2026-02-10"),
    deadline: new Date("2026-02-15"),
    description: "A guest lecture on AI and Machine Learning will be conducted. Students are encouraged to attend."
  },
  {
    title: "Cultural Fest Participation",
    date_posted: new Date("2026-02-12"),
    deadline: new Date("2026-02-28"),
    description: "Students can register for cultural fest competitions. Early registration is recommended."
  }
];

const seedNotices = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Notice.deleteMany({}); // optional: clear existing notices
    await Notice.insertMany(notices);
    console.log("Seeded notices successfully");

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedNotices();