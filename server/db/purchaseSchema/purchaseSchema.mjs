import { Schema } from "mongoose";

const taxSchema = new Schema({
    SGST: {
        type: Number,
        default: 0,
        max: 100,
        min: 0
    },
    CGST: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    ISGST: {
        type: Number,
        default: 0,
        min: 0,
        max:100
    }
},
{_id: false})


const itemPurchaseDetails = new Schema({
    itemCode: {
        type: String,
        required: true
    },
    HSN: {
        type: Number,
    },
    rate : {
        type: Number,
        required: true,
        min: 0
    },
    discount : {
        type: Number,
        required: true,
        default: 0
    },
    tax: taxSchema
},
    {_id: false})

const purchaseSchema = new Schema({
    billNumber: {
        type: String
    },
     
    farmerId : {
        type: String,
        required: true
    },
    taxMode : [taxSchema],
    GSTIN : {
        type: Number
    },
    purchaseDetails : {
        type: itemPurchaseDetails,
        required: true
    },
    totalAmount : {
        type: Number,
        required: true
    },
<<<<<<< HEAD
    purchaseDate : {
=======
    purchaseDate: {
>>>>>>> 3e9535e (FEAT:)
        type: Date,
        default: Date.now(),
        required: true
    }
})

export default purchaseSchema

