import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = ({
    category: {
        type:String,
    },
    name: {
        type:String,
        required: [true, 'prduct name is required']
    },
    HSN: {
        type: Number,
        min: 4,
        max: 8,
    },
    itemCode: {
        type: String
        unique: true
        required: true
    }
    retailPrice: {
        



    


