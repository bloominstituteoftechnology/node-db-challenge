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

module.exports = router;