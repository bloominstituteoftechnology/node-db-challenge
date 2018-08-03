const express = require('express');
const projectModel = require('../../data/helpers/projectDb')

const router = express.Router();

router.get('/', (req, res) => {
    projectModel
        .get()
        .then(users => {res.json(users)})
        .catch(err => {res.status(500).json({ err: 'Unable to retrieve project information!' })
    })
})

module.exports = router;