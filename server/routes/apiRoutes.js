const router = require('express').Router();
const { Appointment } = require('../models');

router.route('/')
    .get((req, res) => {
        Appointment.find({})
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
                res.json('Not Found')
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