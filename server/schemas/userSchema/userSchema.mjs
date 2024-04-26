import mongoose from "mongoose";
import FPO from "../fpoSchema/fpoSchema.mjs";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    validate: {
      validator: (v) => {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    required: [true, "User Email required"],
    unique: true,
  },
  password: {
    type: String,
    minlength: [8, "Password must be at least 8 characters long"],
  },
  fpoRegId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FPO", // Reference to the FPO model
    unique: true,
  },
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
});

UserSchema.index({ userName: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });
export default UserSchema;
