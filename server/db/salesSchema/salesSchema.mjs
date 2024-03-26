import mongoose from "mongoose";
import { Schema } from "mongoose";
const taxSchemaForSales = new Schema({
    CGST: {
        type: Number
    },
    SGST: {
        type: Number
    },
    IGST: {
        type: Number,
        min: 0,
        max: 100
    }
},
    {_id: false})

const itemSoldDetails = new Schema({
    itemCode: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    HSN: {
        type: Number,
    },
    rate: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        min: 0
    },
    tax: [taxSchemaForSales],
},
    {_id: false})



const salesTransactionSchema = new Schema({
    merchantId: {
        type: String
    },
    saleDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    billNo: {
        type: String,
        required: true
    },
    itemSold: {
        type: itemSoldDetails,
        required: true
    },
    totalAmountWithoutDiscount: {
        type: Number,
        required: true
    },
    finalAmount: {
        type: Number,
        required: true
    }
})

export default mongoose.model('salesTransaction', salesTransactionSchema)



