const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
	{
		patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
		treatments: {
			type: [{
				name: { type: String, required: true },
				cost: { type: Number, required: true },
			}],
			default: [],
		},
		status: { type: [String], enum: ["paid", "pending", "cancelled"], required: true, default: "pending" },
		paymentMethod: {
			type: String,
			enum: ["cash", "card", "mobile money", "insurance"],
			default: "cash",
			required: true,
		},
	},
	{ timestamps: true }
);

const Billing = mongoose.model("Billing", billingSchema);

module.exports = Billing;