const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
	{
		billing: { type: mongoose.Schema.Types.ObjectId, ref: "Billing", required: true },
		amount: { type: String, required: true },
		paymentMethod: {
			type: String,
			enum: ["Cash", "Card", "Mobile Money", "Insurance"],
			default: "Cash",
			required: true,
		},
	},
	{ timestamps: true }
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;