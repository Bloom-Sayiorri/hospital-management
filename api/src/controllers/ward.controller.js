const Ward = require("../models/ward.model");

const getAllWards = async (req, res, next) => {
	try {
		const wards = await Department.find({});
		if (wards.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve wards" });
		}
		res.status(200).json({
			data: wards,
			message: "Wards retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleWard = async (req, res, next) => {
	try {
		const ward = await Ward.findById(req.params.id);
		if (!ward) {
			return res.status(404).json({ message: "Failed to retrieve ward" });
		}
		res.status(200).json({
			data: ward,
			message: "Ward retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createWard = async (req, res, next) => {
	try {
		const ward = await Ward.create(req.body);
		res.status(201).json({
			data: ward,
			message: "Ward created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateWard = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const ward = await Ward.findByIdAndUpdate(id, updates, options);
		if (!ward) {
			return res.status(404).json({ message: " Failed to retrieve ward" });
		}
		res.status(200).json({
			data: ward,
			message: "Ward created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteWard = async (req, res, next) => {
	try {
		const ward = await Ward.findByIdAndDelete(req.params.id);
		if (!ward) {
			return res.status(404).json({ message: "Failed to retireve ward" });
		}
		res.status(200).json({
			message: "Ward deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = { getAllWards, getSingleWard, createWard, updateWard, deleteWard };