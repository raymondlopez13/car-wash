const router = require('express').Router();
const { thoughtGetter, getOneThought, thoughtCreator, thoughtUpdater, thoughtRemover, reactionCreate, deleteReaction } = require('../../controllers/thoughts-controller');

router.route('/')
    .get(thoughtGetter)



module.exports = router;