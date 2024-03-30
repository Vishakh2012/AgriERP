import mongoose from "mongoose"


const getCollectionForFPO = async (fpoName, Schema,SchemaName) => {
    const collectionName = `${fpoName }_${SchemaName}`
   const mod = mongoose.model(collectionName, Schema);
    return mod
}

export default getCollectionForFPO
