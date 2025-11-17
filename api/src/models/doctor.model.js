const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
	specialty: { type: String, required: true },
	licenseNumber: { type: Number, required: true },
	yearsOfExperience: { type: Number, required: true },
	bio: { type: String, required: true },
	assignedWards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ward", required: true }],
});

const Doctor = mongoose.model("Doctor", doctorSchema);

model.exports = Doctor;