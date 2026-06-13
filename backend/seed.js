const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const Organizer = require("./models/organizer_model");
const Event = require("./models/event_model");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const seed = async () => {
  try {
    // 1️⃣ Organizer create karo
    const hashedPassword = await bcrypt.hash("organizer123", 10);

    const organizer1 = new Organizer({
      name: "Organizer One",
      email: "organizer1@example.com",
      password: hashedPassword
    });

    await organizer1.save();
    console.log("Organizer created:", organizer1.name);

    // 2️⃣ Seed Events linked with organizer
    const eventsData = [
      {
        title: "Tech Talk",
        description: "A talk about latest tech trends",
        date_posted: new Date(),
        event_date: new Date("2026-03-10"),
        Location: "Auditorium A",
        RegisteredUsers: [],
        deadline: new Date("2026-03-05"),
        event_type: "Seminar",
        organizer: organizer1._id
      },
      {
        title: "Coding Workshop",
        description: "Hands-on coding workshop",
        date_posted: new Date(),
        event_date: new Date("2026-03-15"),
        Location: "Lab 1",
        RegisteredUsers: [],
        deadline: new Date("2026-03-12"),
        event_type: "Workshop",
        organizer: organizer1._id
      }
    ];

    await Event.insertMany(eventsData);
    console.log("Events seeded successfully");

    process.exit();

  } catch (err) {
    console.log("Error seeding data:", err);
    process.exit(1);
  }
};

seed();