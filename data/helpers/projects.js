const express = require('express');
const db = require("./projectsModel.js")

const router = express.Router();



router.get('/', (req, res) => {
    db.find()
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})


module.exports = router;