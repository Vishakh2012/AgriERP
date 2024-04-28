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
  state: {
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
  pinCode: {
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
  firstName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  designation: String,
  address: addressSchema,
  phoneNumber: {
    type: String,
    minlength: 10,
    maxlength: 10,
  },
  email: {
    type: String,
    validate: {
      validator: (v) => /\S+@\S+\.\S+/.test(v),
      message: (props) => `${props.value} is not a valid email`,
    },
    required: [true, "User Email required"],
  },
  dateOfJoin: {
    type: Date,
    default: Date.now,
  },
  salary: Number,
  bankAccountNumber: String,
  bankAccountHolderName: String,
  ifscCode: String,
});

staffSchema.index({staffId : 1, fpoId : 1}, {unique : true})
export default staffSchema;
