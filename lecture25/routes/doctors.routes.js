const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } = require('../controller/doctors.controller')


//read opertion
router.get('/doctors', getDoctors);

//get doctors by id 
router.get('/doctors/:id', getDoctorById);

//create opertion
router.post("/api/doctors", createDoctor);

// update opertion
router.put("/api/doctors/:id", updateDoctor);

//delete opertion
router.delete("/api/doctors/:id", deleteDoctor);

module.exports = router;