const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    actions.get().then(actions => {
        res.status(200).json({actions});

    }).catch(err => {
        res.status(400).json(err)
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    actions.get(id).then(action=> {
        res.status(200).json({action});

    }).catch(err => {
        res.status(400).json(err)
    });
});

router.post('/', (req, res) => {
    const actionInfo = req.body;
    actions.insert(actionInfo).then(result => {
        res.status(201).json(result);
    }).catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
    const actionInfo = req.body;
    actions.update(actionInfo).then(result => {
        res.status(201).json(result);
    }).catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    actions.get(id).then(user => {
        if(action) {
            actions.remove(id)
            .then(count => {
                res.status(200).json(action)
            })
        } else {
            res.status(404).json({message: 'the action with that id does not exist'})
        }
    }).catch(err => res.status(500).json(err))
})


module.exports = router;