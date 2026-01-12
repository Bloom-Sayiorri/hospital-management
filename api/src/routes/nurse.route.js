const express = require("express");
const {
	getAllNurses,
	getSingleNurse,
	createNurse,
	updateNurse,
	deleteNurse,
} = require("../controllers/nurse.controller");

const router = express.Router();

router.get("/", getAllNurses);
router.get("/:id", getSingleNurse);
router.post("/", createNurse);
router.put("/:id", updateNurse);
router.delete("/:id", deleteNurse);

module.exports = router;