const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
	{
		patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
		treatments: [{ type: String, required: true }],
		cost: { type: String, required: true },
		status: { type: [String], enum: ["paid", "pending", "cancelled"], required: true },
		paymentMethod: {
			type: String,
			enum: ["Cash", "Card", "Mobile Money", "Insurance"],
			default: "Cash",
			required: true,
		},
		date: { type: Date.now(), required: true },
	},
	{ timestamps: true }
);

const Billing = mongoose.model("Billing", billingSchema);

module.exports = Billing;