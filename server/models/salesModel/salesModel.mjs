import salesTransactionSchema from "../../schemas/salesSchema/salesSchema.mjs";
import mongoose from "mongoose";

export default mongoose.model("Sales", salesTransactionSchema);
