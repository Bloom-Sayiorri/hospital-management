const { json } = require('express');
const Patient = require('../models/patient.model.js');

const getAllPatients = async (res, req, next) => {
    try {
        const patient = await Patient.findById(req.params.patient);
        return json(patient);
    } catch (error) {
        console.log(error.message);
    }
};

const getSinglePatient = async (req, res, next) => {};

const createPatient = async (req, res, next) => {};

const updatePatient = async (req, res, next) => {};

const deletePatient = async (req, res, next) => {};


module.exports = { getAllPatients, getSinglePatient, createPatient, updatePatient, deletePatient }