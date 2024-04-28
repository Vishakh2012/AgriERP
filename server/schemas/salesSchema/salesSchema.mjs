import mongoose from "mongoose";
import FPO from "../fpoSchema/fpoSchema.mjs";

const itemSoldDetails = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
    },
    itemCode: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    HSN: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      min: 0,
    },
  },
  { _id: false }
);

const salesTransactionSchema = new mongoose.Schema({
  fpoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FPO",
    required: true,
  },
  saleDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  customerType: {
    type: String,
    enum: ["REGULAR", "FARMER", "MERCHANT"],
    default: "REGULAR",
  },
  billNo: {
    type: String,
    required: true,
    unique: true,
  },
  itemSold: {
    type: [itemSoldDetails],
    required: true,
  },
  totalAmountWithoutDiscount: {
    type: Number,
    required: true,
  },
  totalDiscount: {
    type: Number,
  },
  mop: {
    type: String,
  },
  finalAmount: {
    type: Number,
    required: true,
  },
});

salesTransactionSchema.index({ fpoId: 1, billNo: -1 }, { unique: true });
export default salesTransactionSchema;
