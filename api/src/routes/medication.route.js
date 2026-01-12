const express = require("express");
const {
	getAllMedications,
	getSingleMedication,
	createMedication,
	updateMedication,
	deleteMedication,
} = require("../controllers/medication.controller");

const router = express.Router();

router.get("/", getAllMedications);
router.get("/:id", getSingleMedication);
router.post("/", createMedication);
router.put("/:id", updateMedication);
router.delete("/:id", deleteMedication);

module.exports = router;