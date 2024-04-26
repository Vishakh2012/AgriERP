import mongoose from "mongoose";
import UserSchema from "../../schemas/userSchema/userSchema.mjs";

export default mongoose.model("userModel", UserSchema)