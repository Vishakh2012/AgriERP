import farmerSchema from "../../schemas/farmerSchema/farmerSchema.mjs";
import mongoose from "mongoose";

export default mongoose.model("FarmerModel", farmerSchema)