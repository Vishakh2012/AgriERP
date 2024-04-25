import mongoose from "mongoose";
const fpoSchema = new mongoose.Schema({
  name: {
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
  regYear: {
    type: Number,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  balance: {
    type: Number,
  },
});

export default fpoSchema