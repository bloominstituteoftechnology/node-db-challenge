const router = require('express').Router();

const actions = require('./actions-model.js');

router.post('/', async (req, res) => {
    const actions = req.body;

    if (actions.name) {
        try {
            const inserted = await actions.add(actions);
            res.status(201).json(inserted);
        } catch (error) {
            res 
                .status(500)
                .json({ message: 'We ran into an error creating the action' });
        }
    } else {
        res.status(400).json({ message: 'Please provide name of the actions'});
    }
});
module.exports = router;