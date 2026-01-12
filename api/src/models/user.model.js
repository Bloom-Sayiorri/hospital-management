const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		username: { type: String, minLength: [3, "Username must be at least 3 characters."], required: true },
		email: {
			type: String,
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
			lowercase: true,
			unique: true,
			required: true,
		},
		password: { type: String, minLength: [6, "Password must be at least 6 characters."], required: false, select: false },
		gender: { type: String, enum: ["male", "female"], required: true },
		phone: { type: String, required: true },
		avatar: { type: String, required: false },
		role: { type: String, enum: ["doctor", "nurse", "staff", "admin"], required: true, default: "staff" },
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;