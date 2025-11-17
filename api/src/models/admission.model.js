const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
	{
		patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
		admittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		doctorInCharge: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		reason: { type: String, required: true },
		ward: { type: String, required: true },
		roomNumber: { type: String, required: true },
		bed: { type: Number, required: true },
		admissionDate: { type: Date, default: Date.now, required: true },
		status: { type: String, enum: ["None", "Admitted", "Discharged"], default: "None", required: true },
	},
	{ timestamps: true }
);

const Admission = mongoose.model("Admission", admissionSchema);

model.exports = Admission;