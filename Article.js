import mongoose from 'mongoose';

// Documents1 Modal Schema
const documents1Schema = new mongoose.Schema({
    name: {type: String, required: true},
})

// Documents2 Modal Schema
const documents2Schema = new mongoose.Schema({
    name: {type: String, required: true},
})

// Creating model objects
export const Documents1 = mongoose.model('documents1', documents1Schema);
export const Documents2 = mongoose.model('documents2', documents2Schema);
