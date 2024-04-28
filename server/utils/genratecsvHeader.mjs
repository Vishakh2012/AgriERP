// import purchaseSchema from "../schemas/purchaseSchema/purchaseSchema.mjs";

// export default function generateCSVHeader(mainSchema, maxProducts, schemaName) {
//   let header = "";
//   // Append keys from main schema paths
//   Object.keys(mainSchema[schemaName].paths).forEach((key) => {
//     if (key !== "_id") {
//       header += key + ",";
//     }
//   });

//   // Append subpaths for each product
//   for (let i = 0; i < maxProducts; i++) {
//     Object.keys(mainSchema[schemaName].subpaths).forEach((subpath) => {
//       header += `${subpath}.${i}` + ",";
//     });
//   }

//   // Remove trailing comma and return the header
//   return header.slice(0, -1);
// }

// // Example usage
// const maxProducts = 3; // Assuming a maximum of 3 products
// const csvHeader = generateCSVHeader(
//   purchaseSchema,
//   maxProducts,
//   "purchaseSchema"
// );
// console.log(csvHeader);
