const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		headOfDepartment: { type: mongoose.Schma.Types.ObjectId, ref: "Doctor", required: true },
	},
	{ timestamps: true }
);

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;