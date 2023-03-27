const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({path: './config.env'});
require('./config/db')


const app = express();

app.use(express.json({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

connectDB();


app.use("/user", userRoutes);
app.use("/book", bookRoutes);

//setting up port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is up and running at port ${PORT}`);
});