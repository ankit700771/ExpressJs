import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";
export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Data base connection completed");
  } catch (error) {
    console.log("Faild to connect db");
    console.log(error);
  }
}
