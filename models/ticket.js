import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    id: {
        type: String,
        required: true,
    },    
    title: {
        type: String,
        required: true,
    }, 
    date: {
        type: String,
        required: true,
    },
    hall: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    places: {
        type: Array,
        required: true,
    }

}, {timestamps: true});

export const Ticket = mongoose.model('ticket', ticketSchema);