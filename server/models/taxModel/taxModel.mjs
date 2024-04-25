import mongoose from "mongoose";
import taxSchema from "../../schemas/taxSchema/taxSchema.mjs";

export default mongoose.model("TaxModel", taxSchema)