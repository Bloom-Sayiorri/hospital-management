const Medication = require("../models/medication.model");

const getAllMedications = async (req, res, next) => {
	try {
		const medications = await Medication.find({});
		if (medications.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve medications" });
		}
		res.status(200).json({
			data: medications,
			message: "Departments retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleMedication = async (req, res, next) => {
	try {
		const medication = await Medication.findById(req.params.id);
		if (!medication) {
			return res.status(404).json({ message: "Failed to retrieve medication" });
		}
		res.status(200).json({
			data: medication,
			message: "Medication retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createMedication = async (req, res, next) => {
	try {
		const medication = await Medication.create(req.body);
		res.status(201).json({
			data: medication,
			message: "Medication created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateMedication = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const medication = await Medication.findByIdAndUpdate(id, updates, options);
		if (!medication) {
			return res.status(404).json({ message: " Failed to retrieve medication" });
		}
		res.status(200).json({
			data: medication,
			message: "Medication updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteMedication = async (req, res, next) => {
	try {
		const medication = await Medication.findByIdAndDelete(req.params.id);
		if (!medication) {
			return res.status(404).json({ message: "Failed to retireve medication" });
		}
		res.status(200).json({
			message: "Medication deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
    getAllMedications,
    getSingleMedication,
    createMedication,
    updateMedication,
    deleteMedication
}