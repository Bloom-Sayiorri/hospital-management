const express = require("express");
const {
	getAllNotifications,
	getSingleNotification,
	createNotification,
	updateNotification,
	deleteNotification,
} = require("../controllers/notification.controller");

const router = express.Router();

router.get("/", getAllNotifications);
router.get("/:id", getSingleNotification);
router.post("/", createNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);

module.exports = router;