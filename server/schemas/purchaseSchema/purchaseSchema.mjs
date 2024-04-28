import FPO from "../fpoSchema/fpoSchema.mjs";
import mongoose from "mongoose";

const itemPurchaseDetails = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    itemCode: {
      type: String,
      required: true,
    },
    HSN: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const purchaseSchema = new mongoose.Schema({
  fpoId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "FPO",
  },
  billNumber: {
    type: String,
  },
  farmerId: {
    type: String,
  },
  GSTIN: {
    type: String,
  },
  purchaseDetails: {
    type: [itemPurchaseDetails],
    required: true,
  },
  totalAmount: {
    type: Number,
  },
  purchaseDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  finalAmount: {
    type: Number,
  },
});
purchaseSchema.index({ fpoId: 1, billNumber: -1 }, { unique: true });

export default purchaseSchema;
