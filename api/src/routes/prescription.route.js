const express = require("express");
const {
	getAllPrescriptions,
	getSinglePrescription,
	createPrescription,
	updatePrescription,
	deletePrescription,
} = require("../controllers/prescription.controller");

const router = express.Router();

router.get("/", getAllPrescriptions);
router.get("/:id", getSinglePrescription);
router.post("/", createPrescription);
router.put("/:id", updatePrescription);
router.delete("/:id", deletePrescription);

module.exports = router;