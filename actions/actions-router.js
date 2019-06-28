const router = require('express').Router();

const actions = require('./actions-model.js');

router.get('/', async (req, res) => {
    try {
        const actions = await actions.get();
        res.status(200).json(actions);
    }catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;