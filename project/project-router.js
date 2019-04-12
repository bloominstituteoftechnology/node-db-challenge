const router = require('express').Router();

const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/lambda.sqlite3'
    }
}

const db = knex(knexConfig);

//check
router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/', async (req, res) => {
    try {
        const [id] = await db('projects').insert(req.body);
        const project = await db('projects')
        .where({ id })
        .first()
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({ error: 'There was an error posting that!' })
    }
});



module.exports = router;