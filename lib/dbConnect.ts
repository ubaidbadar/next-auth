import mongoose from "mongoose";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return mongoose.connection.db;
  return mongoose.connect(process.env.MONGODB_URI);
}

export default dbConnect;