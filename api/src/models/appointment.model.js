const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
	{
		patient: { type: mongoose.Schema.Types.ObjetId, required: true },
		doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
		date: { type: Date.now(), required: true },
		time: { type: Date.now(), required: true },
		status: { type: [String], enum: ["scheduled", "completed", "cancelled"], required: true },
		reason: { type: String, required: true },
		notes: { type: String, required: true },
	},
	{ timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;