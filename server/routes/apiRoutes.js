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
        Appointment.create(req.body)
            .then(app => {
                res.json(app)
            })
            .catch(error => {
                res.json(error);
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