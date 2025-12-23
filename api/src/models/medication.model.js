const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        stock: { type: Boolean, enum: ["In-Stock", "Out-of-Stock"], default: "In-Stock", required: true },
        expiry: { type: Date, default: Date.now, rewuired: true },
        manufacturer: { type: String ,required: true },
        expiryDate: { type: Date, required: true },
    },
    { timestamps: true }
);

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;