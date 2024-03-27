import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import sales from "./routes/salesRoutes/sales.mjs"
import purchase from "./routes/purachaseRoutes/purchase.mjs"
import auth from "./routes/authenticationRoutes/authRoutes.mjs"
import staff from "./routes/staffRoutes/staff.mjs"
import product from "./routes/productRoutes/product.mjs"
import authJwt from "./middleware/authJwt.mjs";

const PORT = process.env.PORT || 5050;
const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(express.json())

// Load the /posts routes
app.use("/api/user", auth)

app.use(/^\/api\/(?!user(?:\/|$)).*$/, [authJwt.verifyToken])

app.use("/api/sales", sales)
app.use("/api/purchase", purchase)
app.use("/api/staff", staff)
app.use("/api/product", product)


app.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }

    next();
});


// Global error handling
app.use((err, req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.")
})


// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
