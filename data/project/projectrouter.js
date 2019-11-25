const db = require('../db-config')

const Project = require('./projectmodel')

const Router = express.Router();



router.get('/', (req, res) => {
    Recipes.find()
        .then(recipe => {
            res.status(201).json(recipe)
        })
        .catch(err => {
            res.status(500).json({ error: "there was an error" })
        })
})


module.exports = router;