import mongoose from "mongoose";
import { Schema } from "mongoose";

const addressSchema = new Schema({
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postOffice: {
        type: String,
    },
    pinNumber: {
        type: Number,
        required: true,
        min: 0,
        max: 999999
    }
},
    { _id: false })
const staffSchema = new Schema({
    staff_id: {
        type: String,
        unique: true
    },
    name: String,
    blodd_group: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    },
    designation: String,
    address: [addressSchema],
    phone: {
        type: String,
        minLength: 10,
        maxLength: 10,
        unique: true
    },
    email: {
        type: String,
        validate: {
            validator: (v) => {
                return /\S+@\S+\.\S+/.test(v)
            },
            message: props => `${props.value} is not a valid email`
        },

        required: [true, 'User Email number required'],
    },
    dateOfJoining: Date,
    basicSalary: Number,
    accountNumber: Number,
})

export default mongoose.model('Staff', staffSchema)


