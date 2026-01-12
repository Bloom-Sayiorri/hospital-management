const express = require("express");
const {
	getAllDoctors,
	getSingleDoctor,
	createDoctor,
	updateDoctor,
	deleteDoctor,
} = require("../controllers/doctor.controller");

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.post("/", createDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;