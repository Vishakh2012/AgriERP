import mongoose from "mongoose"
import { Schema } from "mongoose"


const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    fpoName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: (v) => {
                return /\S+@\S+\.\S+/.test(v)
            },
            message: props => `${props.value} is not a valid email`
        },

        required: [true, 'User Email required'],
        unique: true

    },
    password: {
        type: String,
        minLength: 8
    }
})

export default mongoose.model('User', UserSchema);
