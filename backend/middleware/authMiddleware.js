const jwt = require("jsonwebtoken");
const user_model = require("../models/user");
const organizer_model = require("../models/organizer_model");

exports.verifyToken = async (req, res, next) => {
  console.log("Incoming cookies:", req.cookies);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");

    // 🔥 Check in both collections
    let account = await user_model
      .findOne({ email: decoded.email })
      .select("name email role");
    
    if (!account) {
      account = await organizer_model
        .findOne({ email: decoded.email })
        .select("name email role");
    }

    if (!account) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = account;
    next();

  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};
exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admin only." });
    }
    next();
};
exports.isOrganizer=(req,res,next)=>{
    if(req.user.role!=="organizer"){
        return res.status(403).json({message:"Access denied,Organizer only"})
    }
    next()
}