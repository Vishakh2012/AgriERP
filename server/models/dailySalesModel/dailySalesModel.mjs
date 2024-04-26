import mongoose from "mongoose";
import dailySalesSchema from "../../schemas/dailySalesSchema/dailySalesSchema.mjs";

export default mongoose.model("dailySalesModel", dailySalesSchema);
