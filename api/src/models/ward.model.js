const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema(
	{
        name: { type: String, required: true },
		room: { type: Number, required: true },
		department: { type: String, required: true },
		capacity: { type: Number, required: true },
		currentPatients: { type: Number, default: 0 },
		supervisor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true }
);

const Ward = mongoose.model('Ward', wardSchema);

module.exports = Ward;