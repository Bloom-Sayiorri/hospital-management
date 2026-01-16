const mongoose = require("mongoose");

const nurseSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward", required: true },
		shift: {
			type: String,
			enum: ["day", "night", "rotational"],
			required: true,
		},
		yearsOfExperience: { type: Number, required: true },
	},
	{ timestamps: true }
);

const Nurse = mongoose.model("Nurse", nurseSchema);

module.exports = Nurse;