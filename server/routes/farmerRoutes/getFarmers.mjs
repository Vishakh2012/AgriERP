import express from "express";
import FPO from "../../db/fpoSchema/fpoSchema.mjs";
import Farmer from "../../db/farmerSchema/farmerSchema.mjs";

const route = express.Router();

async function getObjectId(fponame) {
  try {
    const fpo = await FPO.findOne({ name: fponame });
    if (fpo) {
      return fpo._id;
    } else {
      // FPO not found
      return null;
    }
  } catch (e) {
    console.error("Failed to fetch FPO: " + e.message);
    return null;
  }
}

route.get("/:fponame", async (req, res) => {
  try {
    const fpo_id = await getObjectId(req.params.fponame);
    if (fpo_id) {
      const farmers = await Farmer.find({ fpoRegObjId: fpo_id });
      res.status(200).json(farmers);
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

export default route;

