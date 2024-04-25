import mongoose from "mongoose";
import staffSchema from "../../schemas/staffSchema/staffSchema.mjs";

export default mongoose.model("staffModel", staffSchema)