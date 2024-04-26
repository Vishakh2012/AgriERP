import fs from "fs";
import csv from "csv-parser";
import farmerModel from "../../models/farmerModel/farmerModel.mjs";

export default async function uploadFarmerController(req, res, next) {
  try {
    const fpoId = req.user.fpoId;
    const mapping = req.body;
    console.log(mapping);
    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded.");
    }
    const results = [];
    if (mapping && Object.keys(mapping).length > 0) {
      // Mapping is valid and not empty
      fs.createReadStream(file.path)
        .pipe(csv())
        .on("data", (row) => {
          const objMap = {};
          Object.keys(row).forEach((key) => {
            const mappedkey = mapping[key].trim();
            if (mappedkey) {
              objMap[mappedkey] = row[key];
            }
          });
          objMap[fpoId] = fpoId;
          results.push(objMap);
        })
        .on("end", async () => {
          console.log(results);
          try {
            const farmer = await farmerModel.insertMany(results);
            if (farmer) {
              return res
                .status(201)
                .send({ message: "Imported data successfully", data: farmer });
            } else {
              return res
                .status(400)
                .send({ message: "Unable to complete operation" });
            }
          } catch (error) {
            console.error(error);
            return res.status(500).send({ message: error.message });
          }
        });
    } else {
      // No mapping provided or it's empty
      fs.createReadStream(file.path)
        .pipe(csv())
        .on("data", (row) => {
          row.fpoId = fpoId;
          results.push(row);
        })
        .on("end", async () => {
          console.log(results);
          try {
            const farmer = await farmerModel.insertMany(results);
            if (farmer) {
              return res
                .status(201)
                .send({ message: "Imported data successfully", data: farmer });
            } else {
              return res
                .status(400)
                .send({ message: "Unable to complete operation" });
            }
          } catch (error) {
            console.error(error);
            return res.status(500).send({ message: error.message });
          }
        });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
}
