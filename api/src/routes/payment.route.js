const express = require("express");
const {
	getAllPayments,
	getSinglePayment,
	createPayment,
	updatePayment,
	deletePayment,

} = require("../controllers/payment.controller");

const router = express.Router();

router.get("/", getAllPayments);
router.get("/:id", getSinglePayment);
router.post("/", createPayment);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

module.exports = router;