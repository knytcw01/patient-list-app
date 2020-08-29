const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Patient = new Schema(
    {
        name: { type: String, required: true },
		hkid: { type: String, required: true },
		dob: { type: String, required: true },
        country: { type: [String], required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('patients', Patient)
