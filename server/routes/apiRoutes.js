const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.json({ working: 'yes' })
    });



module.exports = router;