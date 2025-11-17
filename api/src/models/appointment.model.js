const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
	patient: { type: mongoose.Schema.Types.ObjetId, required: true },
	doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
	date: { type: Date.now() },
	time: { type: Date.now() },
	status: { type: [String], enum: ["scheduled" | "completed" | "cancelled" | "no_show"] },
	reason: { type: String, required: true },
	notes: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;