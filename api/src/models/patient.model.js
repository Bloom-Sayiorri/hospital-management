const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
	{
		username: { type: String, minLength: [3, "Name too short"], required: true },
		email: {
			type: String,
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
			lowercase: true,
			required: true,
		},
		age: { type: Number, min: [0, "Age cannot be zero"], required: true },
		gender: { type: String, enum: ["male", "female"], required: true },
		phone: { type: String, required: true },
		dateOfBirth: { type: Date, required: true },
		address: { type: String, required: true },
		occupation: { type: String, required: true },
		emergencyContact: {
			name: { type: String, required: true },
			relation: { type: String, required: true },
			phone: { type: String, required: true },
		},
		doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
		insuranceProvider: { type: String, required: true },
		insuranceNumber: { type: String, required: true },
		allergies: { type: [String], required: true },
		medication: { type: [String], required: true },
		familyMedicalHistory: { type: [String], required: true },
		pastMedicalHistory: { type: [String], required: true },
		bloodType: { type: String, required: true },
	},
	{ timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;