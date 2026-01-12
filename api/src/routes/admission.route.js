const express = require("express");
const {
    getAllAdmissions, 
    getSingleAdmission,
    createAdmission,
    updateAdmission,
    deleteAdmission
} = require("../controllers/admission.controller")

const router = express.Router();

router.get("/", getAllAdmissions);
router.get("/:id", getSingleAdmission);
router.post("/", createAdmission);
router.put("/:id", updateAdmission);
router.delete("/:id", deleteAdmission);

module.exports = router;