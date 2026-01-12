const express = require("express");
const { getAllBeds, getSingleBed, createBed, updateBed, deleteBed } = require("../controllers/bed.controller");

const router = express.Router();

router.get("/", getAllBeds);
router.get("/:id", getSingleBed);
router.post("/", createBed);
router.put("/:id", updateBed);
router.delete("/:id", deleteBed);

module.exports = router;