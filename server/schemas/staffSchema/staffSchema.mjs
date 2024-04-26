import mongoose from "mongoose";
const { Schema } = mongoose;
import FPO from "../fpoSchema/fpoSchema.mjs"

const addressSchema = new Schema({
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
  postOffice: String,
  pinNumber: {
    type: Number,
    required: true,
    min: 0,
    max: 999999,
  },
});

const staffSchema = new Schema({
  staffId: {
    type: String,
    unique: true,
    required: true,
  },
  fpoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FPO",
  },
  name: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  designation: String,
  address: addressSchema,
  phone: {
    type: String,
    minlength: 10,
    maxlength: 10,
    unique: true,
  },
  email: {
    type: String,
    validate: {
      validator: (v) => /\S+@\S+\.\S+/.test(v),
      message: (props) => `${props.value} is not a valid email`,
    },
    required: [true, "User Email required"],
    unique: true,
  },
  dateOfJoining: {
    type: Date,
    default: Date.now,
  },
  basicSalary: Number,
  accountNumber: String,
  IFSC: String,
});

staffSchema.index({staffId : 1, fpoId : 1}, {unique : true})
export default staffSchema;
