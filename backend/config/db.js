const mongoose = require("mongoose");
const DB = process.env.DATABASE;
const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("db is connected");
  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
