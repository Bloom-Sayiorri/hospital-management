const express = require("express");
const PatientController = require("../controllers/patient.controller");

const router = express.Router();

router.get("/", PatientController.getAllPatients);
router.get("/:id", PatientController.getSinglePatient);
router.post("/", PatientController.createPatient);
router.put("/:id", PatientController.updatePatient);
router.delete("/:id", PatientController.deletePatient);

module.exports = router;