const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    username: { type: String, required: true },
    age: { type: Number, required: true },
    mass: { type: Number, required: true }
},{timestamps: true});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;