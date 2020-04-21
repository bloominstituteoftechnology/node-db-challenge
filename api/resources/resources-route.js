const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
    const resources = await Resources.getResources()
    resources
    ? res.json(resources)
    : res.status(400)
   } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message} )
   }        
});

/* POST to create a new resource */
router.post('/', async (req, res) => {
    const newResource = req.body;

    try {
        const inserted = await Resources.addResource(newResource)
        inserted
        ? res.json(inserted)
        : res.status(401).json({ message: 'information misssing'})
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message})
    }
});

module.exports = router;