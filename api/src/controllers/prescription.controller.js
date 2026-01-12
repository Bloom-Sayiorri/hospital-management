const Prescription = require("../models/prescription.model")

const getAllPrescriptions = async (req, res, next) => {
	try {
		const prescriptions = await Prescription.find({});
		if (prescriptions.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve prescriptions" });
		}
		res.status(200).json({
			data: prescriptions,
			message: "Prescriptions retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSinglePrescription = async (req, res, next) => {
	try {
		const prescription = await Prescription.findById(req.params.id);
		if (!prescription) {
			return res.status(404).json({ message: "Failed to retrieve prescription" });
		}
		res.status(200).json({
			data: prescription,
			message: "Prescription retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createPrescription = async (req, res, next) => {
	try {
		const prescription = await Prescription.create(req.body);
		res.status(201).json({
			data: prescription,
			message: "Prescription created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updatePrescription = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const prescription = await Prescription.findByIdAndUpdate(id, updates, options);
		if (!prescription) {
			return res.status(404).json({ message: " Failed to retrieve prescription" });
		}
		res.status(200).json({
			data: prescription,
			message: "Prescription updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deletePrescription = async (req, res, next) => {
	try {
		const prescription = await Prescription.findByIdAndDelete(req.params.id);
		if (!prescription) {
			return res.status(404).json({ message: "Failed to retireve prescription" });
		}
		res.status(200).json({
			message: "Prescription deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
    getAllPrescriptions,
    getSinglePrescription,
    createPrescription,
    updatePrescription,
    deletePrescription
}