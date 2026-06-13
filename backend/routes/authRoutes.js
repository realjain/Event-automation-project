const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const user_model = require('../models/user');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const organizer_model = require('../models/organizer_model');


router.post("/organizer/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existing = await organizer_model.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: "Organizer already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newOrganizer = new organizer_model({
      name,
      email,
      password: hashedPassword,
      role:role,
    });

    await newOrganizer.save();
      const token = jwt.sign(
      {
        email: newOrganizer.email,
        role: newOrganizer.role
      },
      "secret"
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });

    res.status(201).json({
      message: "Organizer registered successfully",
      user: {
        name: newOrganizer.name,
        role: newOrganizer.role
      }
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Signup failed" });
  }
});


router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user_model({
      name,
      email,
      password: hashedPassword,
      role: "student"
    });

    await newUser.save();

    const token = jwt.sign(
      {
        email: newUser.email,
        role: newUser.role
      },
      "secret"
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        name: newUser.name,
        role: newUser.role
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Signup failed" });
  }
});

// router.post('/register',async(req,res)=>{

//     let {name,email,password,role}=req.body;
    
//     let existinguser=await user_model.findOne({email})
//     if(!existinguser){
//         res.send('user already exists')
//     }
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(password, salt,  async function(err, hash) {
//         // Store hash in your password DB.
//         let createdUser=await user_model.create({
//             name:name,
//             email:email,
//             password:hash,
//             role:role
//         })
//         let token=jwt.sign({email:createdUser.email,role:createdUser.role},'secret')
//         res.cookie('token',token,{
//              httpOnly: true,
//   secure: false,   // IMPORTANT for localhost
//   sameSite: "lax"
//         })
//         res.send(createdUser)
//     });
// });
// })



//-----------------------------------------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await user_model.findOne({ email });
    const existingOrganizer = await organizer_model.findOne({ email });

    // ❌ Agar dono me se koi bhi nahi mila
    if (!existingUser && !existingOrganizer) {
      return res.status(400).json({ message: "User not registered" });
    }

    // ✅ Decide karo kaunsa account login kar raha hai
    const account = existingUser || existingOrganizer;

    // ✅ Password compare karo selected account ka
    const isMatch = await bcrypt.compare(password, account.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Token generate karo
    const token = jwt.sign(
      { email: account.email, role: account.role ,name:account.name},
      "secret"
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });
    console.log("login authroute ka role:",account.role)
    return res.status(200).json({
      message: "Login successful",
      user: {
        name: account.name,
        role: account.role
      }
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
});
//--------------------------------------

router.get('/checkauth',verifyToken,(req,res)=>{
  // console.log("Cookies received:", req.cookies);
  // console.log("Token received:", req.cookies.token);
 res.status(200).json({ message: "Authenticated", name: req.user.name,role:req.user.role });


})

module.exports=router