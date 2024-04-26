import mongoose from "mongoose";
import User from "../userSchema/userSchema.mjs";

const tokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  token: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default tokenSchema
