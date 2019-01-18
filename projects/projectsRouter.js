const express = require('express');
const router = express.Router();


//middleware
router.use(express.json());

//endpoints
router.get('/', (req, res) => {
    projects.get().then(users => {
        res.status(200).json({users});

    }).catch(err => {
        res.status(400).json(err)
    })
    
})

router.get('/users/:id', (req, res) => {
    const id = req.params.id;

    projects.get(id)
        .then(user=> {
            if(user) {
                res.status(200).json({user});
            } else {
                res.status(404).json({ message: 'project not found'})
            }
    })
    .catch(err => {res.status(500).json(err)})
    
})


router.post('/', (req, res) => {
    const projectInfo = req.body;
    projects.insert(projectInfo)
        .then(result => {
            projects.get(result.id)
                .then(project => {
                    res.status(201).json(project); 
                })
                .catch(err => res.status(500).json({ message: 'the project by id failed', error: err})
                );
        
    }).catch(err => res.status(500).json({ message: 'the project failed', error: err})
)})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    projects.get(id).then(user => {
        if(user) {
            projects.remove(id)
            .then(count => {
                res.status(200).json(user)
            })
        } else {
            res.status(404).json({message: 'the user with that id does not exist'})
        }
    }).catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
    const projectInfo = req.body;
    projects.update(projectInfo).then(result => {
        res.status(201).json(result);
    }).catch(err => res.status(500).json(err))
});

router.get('/users/actions/:id', (req, res) => {
    const id = req.params.id;

    projects.getProjectActions(id)
        .then(user=> {
            if(user) {
                res.status(200).json({user});
            } else {
                res.status(404).json({ message: 'project not found'})
            }
    })
    .catch(err => {res.status(500).json(err)})
    
})


module.exports = router;