const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find({}).select("-password");
		if (users.length === 0) {
			return res.status(200).json({ data: [], message: "Users not found" });
		}
		return res.status(200).json({
			data: users,
			message: "Users retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const getSingleUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id).select("-password");
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		return res.status(200).json(user);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const createUser = async (req, res, next) => {
	try {
		const { username, email, password, phone, avatar, role } = req.body;

		if (!username || !email || !password) {
			return res.status(400).json({ message: "Missing required fields" });
		}

		const existing = await User.findOne({ email });
		if (existing) {
			return res.status(409).json({ message: "Email already exists" });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({
			username,
			email,
			password: hashedPassword,
			phone,
			avatar,
			role,
		});
		const token = jwt.sign(
			{
				id: user._id,
				role: user.role,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "7d" }
		);
		const cleanUser = user.toObject();
		delete cleanUser.password;
		return res.status(201).json({
			message: "User created",
			user: cleanUser,
			token,
		});
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const updateUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		if (updates.password) {
			updates.password = await bcrypt.hash(updates.password, 10);
		} else {
			delete updates.password;
		}
		const options = { new: true, runValidators: true };
		const user = await User.findByIdAndUpdate(id, updates, options);
		if (!user) {
			return res.status(404).json({ message: "Failed to retrieve user" });
		}
		res.status(200).json({
			data: user,
			message: "User updated successfully",
			success: true,
		});
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const deleteUser = async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if(!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json({ message: "User deleted successfully", success: true })
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

module.exports = {
	getAllUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser,
};