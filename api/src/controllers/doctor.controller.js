const Doctor = require("../models/doctor.model")

const getAllDoctors = async (req, res, next) => {
	try {
		const doctors = await Doctor.find({});
		if (doctors.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve doctors" });
		}
		res.status(200).json({
			data: doctors,
			message: "Doctors retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleDoctor = async (req, res, next) => {
	try {
		const doctor = await Doctor.findById(req.params.id);
		if (!doctor) {
			return res.status(404).json({ message: "Failed to retrieve doctor" });
		}
		res.status(200).json({
			data: doctor,
			message: "Doctor retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createDoctor = async (req, res, next) => {
	try {
		const doctor = await Doctor.create(req.body);
		res.status(201).json({
			data: doctor,
			message: "Doctor created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateDoctor = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const doctor = await Doctor.findByIdAndUpdate(id, updates, options);
		if (!doctor) {
			return res.status(404).json({ message: " Failed to retrieve doctor" });
		}
		res.status(200).json({
			data: doctor,
			message: "Doctor updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteDoctor = async (req, res, next) => {
	try {
		const doctor = await Doctor.findByIdAndDelete(req.params.id);
		if (!doctor) {
			return res.status(404).json({ message: "Failed to retireve doctor" });
		}
		res.status(200).json({
			message: "Doctor deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
	getAllDoctors,
	getSingleDoctor,
	createDoctor,
	updateDoctor,
	deleteDoctor,
};