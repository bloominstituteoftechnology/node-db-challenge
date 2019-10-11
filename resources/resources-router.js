const router = require('express').Router();
const Resources = require('./resources-model.js')

router.get('/', (req,res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `error getting resources! `})
        })
})

router.get('/:id', (req,res) => {
    const {id} = req.params
    Resources.getById(id)
        .then(resource => {
            if(resource){
                res.status(200).json(resource);
            }
            else{
                res.status(404).json({message: `error retrieving the project.`})
            }
        })
})

router.post('/', (req,res) => {
    const { name, description } = req.body
    Resources.insert({ name, description })
        .then(resource => {
            console.log(resource);
            res.status(200).json(resource);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `error posting a new resource! `})
        });
})

module.exports = router;
