import mongoose from "mongoose";
import FPO from "../fpoSchema/fpoSchema.mjs";

const merchantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fpoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FPO",
    required: true,
    unique: true,
  },
  merchant_id: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  is_company: {
    type: Boolean,
    required: true,
  },
  cmpny_gstin: {
    type: String,
    required: function () {
      return this.is_company;
    },
  },
});

merchantSchema.index({ fpoId: 1, merchant_id: 1 }, { unique: true });
export default merchantSchema;
