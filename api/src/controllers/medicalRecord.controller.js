const MedicalRecord = require("../models/medicalRecord.model");

const getAllMedicalRecords = async (req, res, next) => {
	try {
		const medicalRecords = await MedicalRecord.find({});
		if (medicalRecords.length === 0) {
			return res.status(200).json({ data: [], message: "Failed to retrieve medical records" });
		}
		res.status(200).json({
			data: medicalRecord,
			message: "Medical record retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleMedicalRecord = async (req, res, next) => {
	try {
		const medicalRecord = await MedicalRecord.findById(req.params.id);
		if (!medicalRecord) {
			return res.status(404).json({ message: "Failed to retrieve medical record" });
		}
		res.status(200).json({
			data: medicalRecord,
			message: "Medical record retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createMedicalRecord = async (req, res, next) => {
	try {
		const medicalRecord = await MedicalRecord.create(req.body);
		res.status(201).json({
			data: medicalRecord,
			message: "Medical record created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateMedicalRecord = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const medicalRecord = await MedicalRecord.findByIdAndUpdate(id, updates, options);
		if (!medicalRecord) {
			return res.status(404).json({ message: " Failed to retrieve medical record" });
		}
		res.status(200).json({
			data: medicalRecord,
			message: "Medical record updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteMedicalRecord = async (req, res, next) => {
	try {
		const medicalRecord = await MedicalRecord.findByIdAndDelete(req.params.id);
		if (!medicalRecord) {
			return res.status(404).json({ message: "Failed to retireve medical record" });
		}
		res.status(200).json({
			message: "Medical record deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
	getAllMedicalRecords,
	getSingleMedicalRecord,
	createMedicalRecord,
	updateMedicalRecord,
	deleteMedicalRecord
};