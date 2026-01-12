const Admission = require("../models/admission.model.js");

const getAllAdmissions = async (req, res, next) => {
	try {
		const admissions = await Admission.find({});
		if (admissions.length === 0) {
			return res.status(200).json({ data: [], message: "Failed to retrieve admissions" });
		}
		return res.status(200).json(admissions);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const getSingleAdmission = async (req, res, next) => {
	try {
		const admission = Admission.findById(req.params.id);
		if (!admission) {
			return res.status(404).json({ message: "Admission not found" });
		}
		return res.status(200).json(admission);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const createAdmission = async (req, res, next) => {
	try {
		const { patient, admittedBy, doctorInCharge, diagnosis, ward, bed, status, admittedAt, dishcargedAt } = req.body;
		const admission = await Admission.create({
			patient,
			admittedBy,
			doctorInCharge,
			diagnosis,
			ward,
			bed,
			status,
			admittedAt,
			dishcargedAt,
		});
		res.status(201).json({
			data: admission,
			message: "Admission created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateAdmission = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const admission = await Admission.findByIdAndUpdate(id, updates, options);
		if (!admission) {
			return res.status(404).json({ message: "Admission not found" });
		}
		res.status(200).json({
			data: admission,
			message: "Admission updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteAdmission = async (req, res, next) => {
	try {
		const admission = await Admission.findByIdAndDelete(req.params.id);
		if (!admission) {
			return res.status(404).json({ message: "Admission not found" });
		}
		res.status(200).json({
			message: "Admission deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
	getAllAdmissions,
	getSingleAdmission,
	createAdmission,
	updateAdmission,
	deleteAdmission,
};