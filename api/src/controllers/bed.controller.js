const Bed = require("../models/bed.model");

const getAllBeds = async (req, res, next) => {
	try {
		const beds = await Bed.find({});
		if (beds.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve beds" });
		}
		res.status(200).json({
			data: beds,
			message: "Beds retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleBed = async (req, res, next) => {
	try {
		const bed = await Bed.findById(req.params.id);
		if(!bed) {
			return res.status(404).json({ message: "Failed to retrieve bed"});
		}
		res.status(200).json({
			data: bed,
			message: "Bed retrieved successfully",
			success: true,
		})
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createBed = async (req, res, next) => {
	try {
		const bed = await Bed.create(req.body);
		res.status(201).json({
			data: bed,
			message: "Bed created successfully",
			success: true,
		})
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateBed = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const bed = await Bed.findByIdAndUpdate(id, updates, options);
		if(!bed) {
			return res.status(404).json({ message: " Failed to retrieve bed" })
		}
		res.status(200).json({
			data: bed,
			message: "Bed updated successfully",
			success: true,
		})
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteBed = async (req, res, next) => {
	try {
		const bed = await Bed.findByIdAndDelete(req.params.id);
		if(!bed) {
			return res.status(404).json({ message: "Failed to retireve bed" })
		}
		res.status(200).json({
			message: "Bed deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
	getAllBeds,
	getSingleBed,
	createBed,
	updateBed,
	deleteBed,
};