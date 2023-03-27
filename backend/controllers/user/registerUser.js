const bcrypt = require("bcrypt");
const User = require("../../models/usermodel");

require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    if (!fname || !lname || !email || !password ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const saltRound = parseInt(process.env.SALTROUND);
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const user = new User({
      fname,
      lname,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { registerUser };