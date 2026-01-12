const express = require("express");
const  {
    getAllMedicalRecords,
    getSingleMedicalRecord,
    createMedicalRecord,
    updateMedicalRecord,
    deleteMedicalRecord
} = require("../controllers/medicalRecord.controller.js");

const router = express.Router();

router.get("/", getAllMedicalRecords);
router.get("/", getSingleMedicalRecord);
router.post("/", createMedicalRecord);
router.put("/", updateMedicalRecord);
router.delete("/", deleteMedicalRecord);

module.exports = router;