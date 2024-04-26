import User from "../userSchema/userSchema.mjs";
import mongoose from "mongoose";

//schema definitions
const refreshSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    ref: "User",
  },
  refreshToken: {
    type: String,
    unique: true,
    required: true,
  },
  accessToken: {
    type: String,
    unique: true,
    required: true,
  },
});

export default refreshSchema
