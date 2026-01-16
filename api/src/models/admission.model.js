const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
	{
		patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
		admittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Nurse", required: true },
		doctorInCharge: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		diagnosis: { type: String, required: true },
		ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward", required: true },
		bed: { type: mongoose.Schema.Types.ObjectId, ref: "Bed", required: true },
		status: { type: String, enum: ["none", "admitted", "discharged"], default: "None", required: true },
		admittedAt: { type: Date, default: Date.now, required: true },
		dischargedAt: { type: Date, default: null, required: false },
	},
	{ timestamps: true }
);

const Admission = mongoose.model("Admission", admissionSchema);

module.exports = Admission;