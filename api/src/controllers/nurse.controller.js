const Nurse = require("../models/nurse.model")

const getAllNurses = async (req, res, next) => {
	try {
		const nurses = await Nurse.find({});
		if (nurses.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve nurses" });
		}
		res.status(200).json({
			data: nurses,
			message: "Nurses retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleNurse = async (req, res, next) => {
	try {
		const nurse = await Nurse.findById(req.params.id);
		if (!nurse) {
			return res.status(404).json({ message: "Failed to retrieve nurse" });
		}
		res.status(200).json({
			data: nurse,
			message: "Nurse retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createNurse = async (req, res, next) => {
	try {
		const nurse = await Nurse.create(req.body);
		res.status(201).json({
			data: nurse,
			message: "Nurse created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateNurse = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const nurse = await Nurse.findByIdAndUpdate(id, updates, options);
		if (!nurse) {
			return res.status(404).json({ message: " Failed to retrieve nurse" });
		}
		res.status(200).json({
			data: nurse,
			message: "Nurse updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteNurse = async (req, res, next) => {
	try {
		const nurse = await Nurse.findByIdAndDelete(req.params.id);
		if (!nurse) {
			return res.status(404).json({ message: "Failed to retireve nurse" });
		}
		res.status(200).json({
			message: "Nurse deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
    getAllNurses,
    getSingleNurse,
    createNurse,
    updateNurse,
    deleteNurse
}