const express = require('express')

const PatientCtrl = require('../controllers/note.controller.js')

const router = express.Router()

router.post('/patient', PatientCtrl.createPatient)
router.put('/patient/:id', PatientCtrl.updatePatient)
router.delete('/patient/:id', PatientCtrl.deletePatient)
router.get('/patient/:id', PatientCtrl.getPatientById)
router.get('/patients', PatientCtrl.getPatients)

module.exports = router
