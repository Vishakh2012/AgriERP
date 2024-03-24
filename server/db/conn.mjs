import mongoose from "mongoose";
const connectionString = "mongodb://mongo:27017";

const connectToMongo = async (connString) => {
    return await mongoose.connect(connString)
}

const db = connectToMongo(connectionString)

export default db
