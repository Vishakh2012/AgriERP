import { MongoClient } from "mongodb";
const connectionString = "mongodb://mongo:27017";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("sample");
export default db;
