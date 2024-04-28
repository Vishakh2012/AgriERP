import purchaseSchema from "../../schemas/purchaseSchema/purchaseSchema.mjs";
import mongoose from "mongoose";
export default mongoose.model("PurchaseModel", purchaseSchema);
