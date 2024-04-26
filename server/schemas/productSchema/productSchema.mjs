import mongoose from "mongoose";
import { Schema } from "mongoose";
import taxSchema from "../taxSchema/taxSchema.mjs";
import FPO from "../fpoSchema/fpoSchema.mjs";

const productSchema = new Schema({
  category: {
    type: String,
  },
  fpoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FPO",
  },
  name: {
    type: String,
    required: [true, "prduct name is required"],
  },
  HSN: {
    type: String,
  },
  itemCode: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currentStock: {
    type: Number,
    min: 0,
    updatedDate: Date,
    unit: {
      type: String,
      enum: ["kg", "l", "g", "ml", "mtr", "units"],
    },
  },
  tax: [taxSchema],
});

productSchema.index({ fpoId: 1, itemCode: -1 }, { unique: true });
export default productSchema;
