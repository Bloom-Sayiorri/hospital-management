const Patient = require("../models/patient.model.js");

const getAllPatients = async (req, res, next) => {
	try {
		const patients = await Patient.find({});
		if (!patients) {
			return res.status(404).json({ message: "Patients not found" });
		}
		return res.status(200).json({
			data: patients,
			message: "Patients retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const getSinglePatient = async (req, res, next) => {
	try {
		const patient = await Patient.findById(req.params.id);
		if (!patient) {
			return res.status(404).json({ message: "Patient not found" });
		}
		res.status(200).json({
			data: patient,
			message: "Patient retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const createPatient = async (req, res, next) => {
	try {
		const patient = await Patient.create(req.body);
		res.status(200).json({
			data: patient,
			message: "Patient created successfully",
			success: true,
		});
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const updatePatient = async (req, res, next) => {
	try {
		const patient = await Patient.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true, runValidators: true });
		if (!patient) {
			return res.status(404).json({ message: "Patient not found" });
		}
		res.status(200).json({
			data:patient,
			message: "Patient updated successfully",
			success: true,
		});
	} catch (error) {
		concosle.log(error.message);
		next(error);
	}
};

const deletePatient = async (req, res, next) => {
	try {
		const patient = await Patient.findByIdAndDelete(req.params.id);
		if (!patient) {
			return res.status(404).json({ message: "Patient not found" });
		}
		res.status(200).json({ message: "Patient deleted", success: true });
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

module.exports = {
	getAllPatients,
	getSinglePatient,
	createPatient,
	updatePatient,
	deletePatient,
};