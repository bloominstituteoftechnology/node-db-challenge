const express = require('express');
const Resources = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => res.status(200).json(resources))
        .catch( err => res.status(500).json({message: "Sorry unnable to obtain resources"})
        )
}
)

router.post('/', (req, res) => {
    Resources.addResource(req.body)
        .then(resource => res.status(201).json(resource))
        .catch( err => res.status(500).json({message: "Sorry unnable to add resource"})
        )
})
module.exports = router;