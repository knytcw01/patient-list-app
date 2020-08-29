module.exports = (app) => {
    const PatientCtrl = require('../controllers/note.controller.js');

    app.post('/patient', PatientCtrl.createPatient)
	app.put('/patient/:id', PatientCtrl.updatePatient)
	app.delete('/patient/:id', PatientCtrl.deletePatient)
	app.get('/patient/:id', PatientCtrl.getPatientById)
	app.get('/patients', PatientCtrl.getPatients)
}
