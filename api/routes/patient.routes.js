const express = require('express');
const router = express.Router();
const { getAllPatients, getSinglePatient } = require('');

router.get('/', getAllPatients);
router.get('/:id', getSinglePatient);