const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward" },
		shift: String,
		yearsExperience: Number,
	},
	{ timestamps: true }
);

const Nurse = mongoose.model("Nurse", nurseSchema);

module.exports = Nurse;