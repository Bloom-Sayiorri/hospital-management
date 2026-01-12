const Appointment = require("../models/appointment.model");

const getAllAppointments = async (req, res, next) => {
	try {
		const appointments = Appointment.find({});
		if (appointments.length === 0) {
			return res.status(200).json({ data: [], message: "Failed to retrieve appointments" });
		}
		res.status(200).json({
			data: appointments,
			message: "Appointments retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleAppointment = async (req, res, next) => {
	try {
		const appointment = Appointment.findById(req.params.id);
		if (!appointment) {
			return res.status(404).json({ message: "Appointment not found" });
		}
		res.status(200).json({
			data: appointment,
			message: "Appointment retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createAppointment = async (req, res, next) => {
	try {
		const { patients, doctor, status, reason, notes } = req.body;
		const appointment = Appointment.create({ patients, doctor, status, reason, notes });
		res.status(200).json({
			data: appointment,
			message: "Appointment created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateAppointment = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runVlidators: true };
		const appointment = Appointment.findByIdAndUpdate(id, updates, options);
		if (!appointment) {
			return res.status(404).json({ message: "Appointment not found" });
		}
		res.status(200).json({
			data: appointment,
			message: " Appointment updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteAppointment = async (req, res, next) => {
	try {
		const { id } = req.params;
		const appointment = Appointment.findByIdAndDelete(id);
		if (!appointment) {
			return res.status(404).json({ message: "Appointment not found" });
		}
		res.status(200).json({
			message: "Appointment deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
	getAllAppointments,
	getSingleAppointment,
	createAppointment,
	updateAppointment,
	deleteAppointment,
};