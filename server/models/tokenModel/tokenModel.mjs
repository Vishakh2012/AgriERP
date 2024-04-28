import mongoose from "mongoose";
import tokenSchema from "../../schemas/tokenSchema/tokenSchema.mjs";

export default mongoose.model("tokenModel", tokenSchema)