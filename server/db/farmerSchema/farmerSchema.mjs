import mongoose from "mongoose";
import { Schema } from "mongoose";
import fpoSchema from "../fpoSchema/fpoSchema.mjs";

// Address schema
const addressSchema = new mongoose.Schema({
  houseName: {
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
    required: true,
  },
  pinNumber: {
    type: Number,
    required: true,
  },
});

const farmerSchema = new mongoose.Schema({
  farmerId: {
    type: String,
    required: true,
    unique: true,
  },
  fpoRegId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: fpoSchema,
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
