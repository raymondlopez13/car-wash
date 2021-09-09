const router = require('express').Router();
const { Appointment } = require('../models');

router.route('/')
    .get((req, res) => {
        Appointment.find({}).sort({newAppointment: 'descending'}).sort({date:'ascending'}).sort({time: 'ascending'})
            .then(apps => {
                res.json(apps);
            })
            .catch(error => {
                res.json(error);
            })
    })
    .post((req,res) => {    
        Appointment.create(req.body).then(data => {
            res.json(data);
        })
            
    });

router.route('/:id')
    .put((req,res) => {
        Appointment.findByIdAndUpdate(req.params.id, req.body)
            .then(app => {
                res.json(app);
            })
            .catch(err => {
                res.json(err);
            });
    })
    .delete((req,res) => {
        Appointment.findByIdAndDelete(req.params.id)
            .then(app => {
                res.json(app);
            })
            .catch(err => {
                res.json(err);
            })
    })



module.exports = router;