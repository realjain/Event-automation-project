const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");

const createAdmin = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/event_automation", );

    console.log("MongoDB connected");

    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Super Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin"
    });

    console.log("Default admin created successfully");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

createAdmin();