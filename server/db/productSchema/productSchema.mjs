import mongoose from "mongoose";
import { Schema } from "mongoose";
import fpoSchema from "../fpoSchema/fpoSchema.mjs";
const taxSchema = new Schema({
    CGST: {
        type: Number,
        required: true
    },
    SGST: {
        type: Number,
        required: true
    },
    IGST: {
        type: Number,
        required: true
    }
},
    { _id: false })

const dailySalesSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    quantitySold: {
        type: Number,
        required: true,
        default: 0
    }
})



const productSchema = new Schema({
    category: {
        type: String,
    },
    fpoRegObjId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: fpoSchema,
    },

    name: {
        type: String,
        required: [true, 'prduct name is required']
    },
    HSN: {
        type: Number,
    },
    itemCode: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    currentStock: {
        type: Number,
        min: 0,
        updatedDate: Date,
        unit: {
            type: String,
            enum: ["kg", 'l', 'g', 'ml', 'mtr', 'units']
        }
    },
    tax: [taxSchema],
    dailySalesHistory: [dailySalesSchema]
})
productSchema.index({fpoRegObjId: 1, itemCode: -1})
export default mongoose.model('Product', productSchema)









