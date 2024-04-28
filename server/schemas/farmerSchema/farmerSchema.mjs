import mongoose from "mongoose";
import FPO from "../fpoSchema/fpoSchema.mjs";
// Address schema
const addressSchema = new mongoose.Schema(
  {
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    postOffice: {
      type: String,
    },
    pinNumber: {
      type: Number,
      min: 0,
      max: 999999,
    },
  },
  { _id: false }
);

const farmerSchema = mongoose.Schema({
  farmerId: {
    type: String,
    required: true,
    unique: true,
  },
  fpoId: {
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
    enum: ["male", "female", "other"],
    required: true,
  },
  address: {
    type: addressSchema,
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
    enum: ["shareholder", "farmer"],
    required: true,
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
  DateOfJoining: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});
farmerSchema.index({ farmerId: 1, fpoId: 1 }, { unique: true });
export default farmerSchema;
