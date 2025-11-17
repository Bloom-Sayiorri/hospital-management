const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
	{
		username: { type: String, minLength: [3, "Name too short"], required: true },
		email: { type: String, match: ["Email must be of type, 'name@mail.com'"], lowercase: true, required: true },
		phone: { type: String, required: true },
		age: { type: Number, required: true, min: [0, "Age cannot be zero"] },
		gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
		dateOfBirth: { type: Date, required: true },
		address: { type: String, required: true },
		occupation: { type: String, required: true },
		emergencyContact: {
			name: String,
			relation: String,
			phone: String,
			required: true,
		},
		doctorId: { type: ObjectId, ref: "Doctor", required: true },
		insuranceProvider: { type: String, required: true },
		insuranceNumber: { type: String, required: true },
		allergies: { type: [String], required: true },
		medication: { type: [String], required: true },
		familyMedicalHistory: { type: String, required: true },
		pastMedicalHistory: { type: String, required: true },
		bloodType: { type: String, required: false },
	},
	{ timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;