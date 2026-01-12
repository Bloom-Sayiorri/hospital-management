const express = require("express");
const {
	getAllAppointments,
	getSingleAppointment,
	createAppointment,
	updateAppointment,
	deleteAppointment,
} = require("../controllers/appointment.controller");

const router = express.Router();

router.get("/", getAllAppointments);
router.get("/:id", getSingleAppointment);
router.post("/", createAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

module.exports = router;