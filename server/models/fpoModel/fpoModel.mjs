import mongoose from "mongoose";
import fpoSchema from "../../schemas/fpoSchema/fpoSchema.mjs";

export default mongoose.model("fpoModel", fpoSchema)