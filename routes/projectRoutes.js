const express = require('express');
const router = express.Router();
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const projects = await db('project')
        res.status(200).json( projects );
    }
    catch ( err ) {
        res.status(500).json( err );
    };
});



module.exports = router;