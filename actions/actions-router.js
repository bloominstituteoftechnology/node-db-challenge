const router = require('express').Router();
const db = require('./actions-model.js');

// Get Actions. **Postman Tested: Working**
router.get('/', (req, res) => {
    db.getActions()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});

// Get Action by ID. **Postman Tested: Working**
router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    db.getById(id)
    .then(action => {
        if(action) {
            res.status(200).json(action)
        } else {
            res.status(400).json({ message: "The specified action does not exist."})
        }
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});

// Add Project. **Postman Tested: Working**
router.post('/', (req, res) => {
    const newAction = req.body;

    if(!newAction.project_id || !newAction.description) {
        res.status(404).json({ message: 'Please provide a valid project ID and a description for this new action.'})
    } else {
        db.addAction(newAction)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }
});


module.exports = router;