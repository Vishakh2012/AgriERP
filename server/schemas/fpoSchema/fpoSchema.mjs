import mongoose from "mongoose";
const fpoSchema = new mongoose.Schema({
  fpoRegNumber: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    validate: {
      validator: (v) => {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    required: [true, "User Email required"],
    unique: true,
  },
  phone: {
    type: String,
  },
  CEO: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  bankAccountNumber: {
    type: String,
  },
  block: {
    type: String,
  },
  postOffice: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  bankBranchName: {
    type: String,
  },
  IFSC: {
    type: String,
  },
  city : {
    type : String
  },
  regYear: {
    type: Number,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  balance: {
    type: Number,
  },
});

export default fpoSchema;
