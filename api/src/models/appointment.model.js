const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
	{
		doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
		patient: { type: mongoose.Schema.Types.ObjectId, required: true },
		notes: { type: String, required: true },
		reason: { type: String, required: true },
		status: { type: String, enum: ["completed", "cancelled", "pending", "scheduled"], required: true, default: "pending" },
	},
	{ timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;