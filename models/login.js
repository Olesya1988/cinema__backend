import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const loginSchema = new Schema({    
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }   
}, {timestamps: true});

export const Login = mongoose.model('login', loginSchema);