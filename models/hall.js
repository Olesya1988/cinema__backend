import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const hallSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    rows: {
        type: Number,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    places: {
        type: Array,
        required: true,
    },
    prices: {
        type: Object,
        required: true,
    },
}, {timestamps: true});

export const Hall = mongoose.model('Hall', hallSchema);

