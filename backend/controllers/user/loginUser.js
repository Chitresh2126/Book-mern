const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/usermodel");

require("dotenv").config();

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send({ message: "Incorrect password" });
    }

    const token = await jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const cookieOptions = {
      maxAge: 60 * 60 * 2000, 
    };

    res.cookie("token", token, cookieOptions);

    res
      .status(200)
      .send({ message: "Login successful", email, role: user.role });
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = {
  loginUser,
};
