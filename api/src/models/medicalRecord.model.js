const mongoose = require('mongoose');

const medicalRecordSchema = new mognoose.Schema({
	patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
	doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
	diagnosis: { type: String, required: true },
	visitDate: { type: Date, default: Date.now, required: true },
	notes: { type: String, required: true },
	attachments: [{ type: String, required: false }],
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

module.exports = MedicalRecord;