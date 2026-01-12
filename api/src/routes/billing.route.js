const express = require("express");
const {
	getAllBillings,
	getSingleBilling,
	createBilling,
	updateBilling,
	deleteBilling,
} = require("../controllers/billing.controller");

const router = express.Router();

router.get("/", getAllBillings);
router.get("/:id", getSingleBilling);
router.post("/", createBilling);
router.put("/:id", updateBilling);
router.delete("/:id", deleteBilling);

module.exports = router;