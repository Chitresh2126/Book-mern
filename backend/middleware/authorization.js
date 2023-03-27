require("dotenv").config();
const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const token = req.header("authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.send({ message: "Not Authorized" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.userId;
    req.role = decodedToken.role;
    next();
  } catch (err) {
    return res.send({ message: "Invalid Token" });
  }
};

module.exports = authorization;