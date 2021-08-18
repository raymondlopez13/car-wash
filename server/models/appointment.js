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
        address: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: true
        }
});



const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;