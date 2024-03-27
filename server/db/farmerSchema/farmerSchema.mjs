import mongoose from "mongoose";
import { Schema } from "mongoose";
import FPO from "../fpoSchema/fpoSchema.mjs";

// Address schema
const addressSchema = new Schema(
  {
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postOffice: {
      type: String,
    },
    pinNumber: {
      type: Number,
      required: true,
      min: 0,
      max: 999999,
    },
  },
  { _id: false }
);

const farmerSchema = new Schema({
  farmerId: {
    type: String,
    required: true,
    unique: true,
  },
  fpoRegObjId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "FPO",
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"], // Assuming gender can be one of these values
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  block: {
    type: String,
  },
  dob: {
    type: Date,
    required: true,
  },
  fathersName: {
    type: String,
  },
  farmerType: {
    type: String,
  },
  landType: {
    type: String,
  },
  landArea: {
    type: Number,
  },
  balance: {
    type: Number,
  },
  category: {
    type: String,
  },
  userType: {
    type: String,
    default: "shareholder",
  },
  equityAmount: {
    type: Number,
  },
  equityShares: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
  farmerProduct: {
    type: String,
  },
});

export default mongoose.model("Farmer", farmerSchema);
