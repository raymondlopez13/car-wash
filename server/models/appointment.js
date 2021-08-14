const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema(
    {
        name: {
            type: String,
            required: "Name is required!",
            trim: true
        },
        email: {
            type: String,
            required: 'Email is required!',
            trim: true,
            match: /.+\@.+\..+/
        },
        phone: {
            type: String,
            required: true,
            match: /^[0-9]*$/
        },
        date: {
            type: Date,
            required: true
        }
});



const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;