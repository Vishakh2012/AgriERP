import mongoose, { Schema } from "mongoose";
import FPO from "../fpoSchema/fpoSchema.mjs";

const dailySalesSchema = new Schema({
  fpoId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "FPO",
  },
  itemCode: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  quantitySold: {
    type: Number,
    required: true,
    default: 0,
  },
});

dailySalesSchema.index({ fpoId: 1, itemCode: 1 }, { unique: true });
export default dailySalesSchema;
