import mongoose from "mongoose";
const connectionString = "mongodb://mongo:27017";
import User from "./userSchema/userSchema.mjs"

const connectToMongo = async (connString) => {
    return await mongoose.connect(connString)
}

const db = connectToMongo(connectionString)
db.User = User

export default db
