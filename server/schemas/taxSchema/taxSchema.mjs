import { Schema } from "mongoose";
const taxSchema = new Schema({
  HSN: {
    type: String,
  },
  CGST: {
    type: Number,
    required: true,
  },
  SGST: {
    type: Number,
    required: true,
  },
  IGST: {
    type: Number,
    required: true,
  },
});

export default taxSchema;
