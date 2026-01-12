const Notification = require("../models/notification.model")

const getAllNotifications = async (req, res, next) => {
	try {
		const notifications = await Notification.find({});
		if (notifications.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve notifications" });
		}
		res.status(200).json({
			data: notifications,
			message: "Notifications retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleNotification = async (req, res, next) => {
	try {
		const notification = await Notification.findById(req.params.id);
		if (!notification) {
			return res.status(404).json({ message: "Failed to retrieve Notification" });
		}
		res.status(200).json({
			data: notification,
			message: "Notification retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createNotification = async (req, res, next) => {
	try {
		const notification = await Notification.create(req.body);
		res.status(201).json({
			data: notification,
			message: "Notification created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateNotification = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const notification = await Notification.findByIdAndUpdate(id, updates, options);
		if (!notification) {
			return res.status(404).json({ message: " Failed to retrieve Notification" });
		}
		res.status(200).json({
			data: notification,
			message: "Notification updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteNotification = async (req, res, next) => {
	try {
		const notification = await Notification.findByIdAndDelete(req.params.id);
		if (!notification) {
			return res.status(404).json({ message: "Failed to retireve notification" });
		}
		res.status(200).json({
			message: "Notification deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
    getAllNotifications,
    getSingleNotification,
    createNotification,
    updateNotification,
    deleteNotification
}