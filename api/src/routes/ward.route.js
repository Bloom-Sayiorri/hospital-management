const express = require("express");
const { getAllWards, getSingleWard, createWard, updateWard, deleteWard } = require("../controllers/ward.controller");

const router = express.Router();

router.get("/", getAllWards);
router.get("/:id", getSingleWard);
router.post("/", createWard);
router.put("/:id", updateWard);
router.delete("/:id", deleteWard);

module.exports = router;