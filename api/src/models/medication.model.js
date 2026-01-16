const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        stock: { type: String, enum: ["in-stock", "out-of-stock"], default: "in-stock", required: true },
        manufacturer: { type: String ,required: true },
        dateOfManufacture: { type: Date, required: true },
        expiryDate: { type: Date, required: true },
    },
    { timestamps: true }
);

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;