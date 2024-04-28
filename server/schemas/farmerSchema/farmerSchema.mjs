import mongoose from "mongoose";
import FPO from "../fpoSchema/fpoSchema.mjs";
// Address schema

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
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other", ""],
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
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
  shareHolder: {
    type: String,
  },
  shareAmount: {
    type: Number,
  },
  numberOfShares: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
  cropsProduced: {
    type: String,
  },
  DateOfJoining: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  bankAccouHolderName: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  bankAccountNumber: {
    type: String,
  },
  aadhaar: {
    type: String,
    unique: true,
  },
  //address details
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  district: {
    type: String,
  },
  city: {
    type: String,
  },
  postOffice: {
    type: String,
  },
  pincode: {
    type: Number,
    min: 0,
    max: 999999,
  },
  fatherName: {
    type: String,
  },
});
farmerSchema.index({ farmerId: 1, fpoId: 1 }, { unique: true });
export default farmerSchema;
