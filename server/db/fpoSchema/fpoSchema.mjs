import mongoose from "mongoose";

const fpoSchema = mongoose.Schema({
  fpo_reg_id: {
    type: Number,
    unique: true,
  },
  fpo_name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("FPO", fpoSchema);
