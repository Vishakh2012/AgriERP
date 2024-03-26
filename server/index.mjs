import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import sales from "./routes/salesRoutes/sales.mjs"
import purchase from "./routes/purachaseRoutes/purchase.mjs"
import staff from "./routes/staffRoutes/staff.mjs"
import product from "./routes/productRoutes/product.mjs"
import farmerRouter from "./routes/FarmerRoutes/farmer.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/api/sales", sales);
app.use("/api/purchase", purchase);
app.use("/api/staff", staff);
app.use("/api/product", product);
app.use("/api/farmer", farmerRouter);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
