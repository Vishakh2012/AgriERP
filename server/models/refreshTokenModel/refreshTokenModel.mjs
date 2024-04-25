import mongoose from "mongoose";
import refreshSchema from "../../schemas/refreshTokenSchema/refreshTokenSchema.mjs";

export default mongoose.model("RefreshTokenModel", refreshSchema)