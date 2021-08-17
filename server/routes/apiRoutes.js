const router = require('express').Router();
const { Appointment } = require('../models');

router.route('/')
    .get((req, res) => {
        Appointment.find({}).sort({date:'ascending'}).sort({time: 'ascending'})
            .then(apps => {
                res.json(apps);
            })
            .catch(error => {
                res.json(error);
            })
    })
    .post((req,res) => {
        Appointment.find(req.body).then(app => {
            if(!app[0]) {
                Appointment.create(req.body).then(data => {
                    res.json(data);
                })
            } else {
                res.json(app);
            }
        });
        
    });
router.route('/:id')
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