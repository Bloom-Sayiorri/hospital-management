const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
	{
		patient: { type: mongoose.Schema.Types.ObjectId, required: true },
		doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
		status: { type: String, enum: ["completed", "cancelled", "pending", "scheduled"], required: true, default: "pending" },
		reason: { type: String, required: true },
		notes: { type: String, required: true },
	},
	{ timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;