import express from "express"
import db from "../../db/conn.mjs";
import Product from "../../db/productSchema/productSchema.mjs"
const Router = express.Router();
import FPO from "../../db/fpoSchema/fpoSchema.mjs";



async function getObjectId(fponame) {
    try {
        const fpo = await FPO.findOne({ name: fponame });
        if (fpo) {
            return fpo._id;
        } else {
            return null;
        }
    } catch (e) {
        console.error("failed fetch fpo : " + e.message);
        return null;
    }
}

//get post request
Router.post("/add", async (req, res) => {
    const fpo_id = await getObjectId(req.body.fpoName);
    if (fpo_id === null) {
        res.status(400).send("enter a valid fpo name");
    } else {
        try {
            const product_details = req.body;
            const product = new Product({ ...product_details, fpoRegObjId: fpo_id });
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            // Check if the error is a validation error
            if (error.name === "ValidationError") {
                res.status(400).json({ error: error.message });
            } else {
                console.error("Error creating product:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        }
    }
});


Router.get("/getDetails/:fponame", async (req, res) => {
    try {
        const fpo_id = await getObjectId(req.params.fponame);
        if (fpo_id) {
            const products = await Product.find({ fpoRegObjId: fpo_id });
            res.status(200).json(products);
        } else {
            // FPO not found
            res.status(404).send("FPO not found");
        }
    } catch (err) {
        // Internal server error
        console.error("Internal server error:", err);
        res.status(500).send("Internal server error");
    }
});


Router.post('/edit', async (req, res) => {
    try {
        const { fpoName, itemCode, updates } = req.body
        const fpo_id = await getObjectId(fpoName);
        if (fpo_id === null) {
            res.status(400).send("enter a valid fpo name");
            return
        }

        try {
            const filter = {
                itemCode: itemCode,
                fpoRegObjId: fpo_id
            }
            const NewUpdate = await Product.findOneAndUpdate(filter, updates, { new: true })
            if (!NewUpdate) {
                res.status(500).send({ message: "no document found" })
                return
            }
            return res.send(req.body)
        } catch (error) {
            res.status(404).send({ message: error })
            return
        }
    } catch (err) {
        res.status(500).send({ message: fpoName })
        return
    }
})



export default Router;









