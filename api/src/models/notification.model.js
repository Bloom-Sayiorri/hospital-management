const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
	{
		patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true, },
		title: { type: String, required: true },
		message: { type: String, required: true },
		appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
		type: {
			type: String,
			enum: ["appointment", "billing", "test", "general"],
			default: "general",
            required: true,
		},
		isRead: { type: Boolean, default: false, required: true },
	},
	{ timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;