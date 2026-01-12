const Payment = require("../models/payment.model")

const getAllPayments = async (req, res, next) => {
	try {
		const payments = await Payment.find({});
		if (payments.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve payments" });
		}
		res.status(200).json({
			data: payments,
			message: "Payments retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSinglePayment = async (req, res, next) => {
	try {
		const payment = await Payment.findById(req.params.id);
		if (!payment) {
			return res.status(404).json({ message: "Failed to retrieve payment" });
		}
		res.status(200).json({
			data: payment,
			message: "Payment retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createPayment = async (req, res, next) => {
	try {
		const payment = await Payment.create(req.body);
		res.status(201).json({
			data: payment,
			message: "Payment created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updatePayment = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const payment = await Payment.findByIdAndUpdate(id, updates, options);
		if (!payment) {
			return res.status(404).json({ message: " Failed to retrieve payment" });
		}
		res.status(200).json({
			data: payment,
			message: "Payment updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deletePayment = async (req, res, next) => {
	try {
		const payment = await Payment.findByIdAndDelete(req.params.id);
		if (!payment) {
			return res.status(404).json({ message: "Failed to retireve payment" });
		}
		res.status(200).json({
			message: "Payment deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
    getAllPayments,
    getSinglePayment,
    createPayment,
    updatePayment,
    deletePayment
}