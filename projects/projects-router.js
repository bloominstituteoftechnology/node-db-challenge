const router = require('express').Router();

const projects = require('./projects-model.js');

router.post('/', async (req,res) => {
    const role = req.body;

    if(projects.name) {
        try {
            const inserted = await projects.add(projects);
            res.status(201).json(inserted);
        }catch (error) {
            res 
                .status(500)
                .json({ message: 'We ran into an error creating the projects'});
        }
    } else {
        res.status(400).json({ message: 'Please provide name of the projects'})
    }
});



module.exports = router;