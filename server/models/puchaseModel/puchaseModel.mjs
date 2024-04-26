import mongoose from "mongoose";
import purchaseSchema from "../../schemas/purchaseSchema/purchaseSchema.mjs";

export default mongoose.model("PurchaseModel", purchaseSchema)