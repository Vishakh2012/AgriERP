import mongoose from "mongoose";
import productSchema from "../../schemas/productSchema/productSchema.mjs";

export default mongoose.model("ProductModel",productSchema)