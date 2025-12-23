const mongoose = require("mongoose");

const bedSchema = new mongoose.Schema(
    {
        ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward", required: true },
        bedNumber: { type: Number, required: true },
        isOccupied: { type: Boolean, default: false, required: true },
    },
    { timestamps: true }
)

const Bed = mongoose.model("Bed", bedSchema);

module.exports = Bed;