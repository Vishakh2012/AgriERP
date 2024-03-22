import mongoose from "mongoose";
import { Schema } from "mongoose";

const staffSchema = new Schema({
    staff_id: {
        type: String,
        unique: true
    },
    name: String,
    blodd_group: {
        type: String,
        enum: ['A+','A-', 'B+','B-', 'O+','O-','AB+','AB-'],
    },
    designation: String,
    address: [addressSchema],
    phone:{
        type: String,
        minLength: 10,
        maxLength: 10,
        unique: true
    },
    email:{
        type: String,
        validate:{
            validator: (v:string) => {
                return /\S+@\S+\.\S+/.test(v)
            },
            message: props => `${props.value} is not a valid email`
        },
    
        required: [true, 'User Email number required'],
    },
    dateOfJoining: Date,
    basicSalary: Number,
    accountNumber: Number,
}


