const Billing = require("../models/billing.model")

const getAllBillings = async (req, res, next) => {
	try {
		const billings = await Billing.find({});
		if (billings.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve billings" });
		}
		res.status(200).json({
			data: billings,
			message: "Billings retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleBilling = async (req, res, next) => {
	try {
		const billing = await Billing.findById(req.params.id);
		if (!billing) {
			return res.status(404).json({ message: "Failed to retrieve billing" });
		}
		res.status(200).json({
			data: billing,
			message: "Billing retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createBilling = async (req, res, next) => {
	try {
		const billing = await Billing.create(req.body);
		res.status(201).json({
			data: billing,
			message: "Billing created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateBilling = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const billing = await Billing.findByIdAndUpdate(id, updates, options);
		if (!billing) {
			return res.status(404).json({ message: " Failed to retrieve billing" });
		}
        res.status(200).json({
            data: billing,
            message: "Billing updated successfully",
            success: true,
        })
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteBilling = async (req, res, next) => {
	try {
		const billing = await Billing.findByIdAndDelete(req.params.id);
		if (!billing) {
			return res.status(404).json({ message: "Failed to retireve billing" });
		}
		// res.status(204);
		res.status(200).json({
			message: "Billing deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
    getAllBillings,
    getSingleBilling,
    createBilling,
    updateBilling,
    deleteBilling
}