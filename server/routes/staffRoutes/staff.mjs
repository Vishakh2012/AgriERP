import express from "express";
import db from "../../db/conn.mjs";
import Staff from "../../db/staffSchema/staffSchema.mjs"
import FPO from "../../db/fpoSchema/fpoSchema.mjs";
const Router = express.Router();


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
            const staff_details = req.body;
            const staff = new Staff({ ...staff_details, fpoRegObjId: fpo_id });
            await staff.save();
            res.status(201).json(staff);
        } catch (error) {
            // Check if the error is a validation error
            if (error.name === "ValidationError") {
                res.status(400).json({ error: error.message });
            } else {
                console.error("Error creating staff:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        }
    }
});


Router.get("/getDetails/:fponame", async (req, res) => {
    try {
        const fpo_id = await getObjectId(req.params.fponame);
        if (fpo_id) {
            const staffs = await Staff.find({ fpoRegObjId: fpo_id });
            res.status(200).json(staffs);
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
    const { staffId, updates } = req.body

    try {
        const NewUpdate = await Staff.findOneAndUpdate({ staffId: staffId }, updates, { new: true })
        if (!NewUpdate) {
            res.status(500).send({ message: req.body })
            return
        }
        return res.send(req.body)
    } catch (error) {
        res.status(404).send({ message: error })
        return
    }
})



export default Router;




