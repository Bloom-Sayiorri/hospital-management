const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
	{
		billing: { type: mongoose.Schema.Types.ObjectId, ref: "Billing", required: true },
		amount: { type: String, required: true },
		paymentMethod: {
			type: String,
			enum: ["cash", "card", "mobile money", "insurance"],
			default: "cash",
			required: true,
		},
	},
	{ timestamps: true }
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;