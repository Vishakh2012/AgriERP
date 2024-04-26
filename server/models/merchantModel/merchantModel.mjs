import mongoose from "mongoose";
import merchantSchema from "../../schemas/merchantSchema/merchantSchema.mjs";

export default mongoose.model("MerchantModel", merchantSchema);
