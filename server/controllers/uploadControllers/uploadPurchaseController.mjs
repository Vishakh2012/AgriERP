import generateCSVHeader from "../../utils/genratecsvHeader.mjs";
import purchaseSchema from "../../schemas/purchaseSchema/purchaseSchema.mjs";
import fs from "fs"
import { pipeline } from "stream";
export default async function uploadPurchaseController(req, res, next) { 
    try {
        const csv_header = generateCSVHeader(purchaseSchema, 20, "purchaseSchema");
        const outputFilePath = "../data/temp.csv"
        console.log(csv_header)
        if (!req.file) { 
            return res.status(404).send({messaage : "file not found"})
        }
        const filePath = req.file.path;
        const writeStream = fs.createWriteStream(outputFilePath)
        writeStream.write(csv_header)

        const readStream = fs.createReadStream(filePath);


        await pipelineAsync(readStream, writeStream)
        writeStream.close();

    } catch (e) { 
        return res.status(500).send({message : e.message})
    }
}