import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const movieSchema = new Schema({    
    title: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    seances: {
        type: Array,
        required: true,
    },

}, {timestamps: true});

export const Movie = mongoose.model('movie', movieSchema);