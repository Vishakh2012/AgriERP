import mongoose from "mongoose";
const fpoSchema = new mongoose.Schema({
  fpoId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  regYear: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("FPO", fpoSchema);
