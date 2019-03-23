const express = require('express');
const router = express.Router();
const actionDB = require('../data/helpers/actionHelpers');

// GET
router.get('/', (req, res) => {
	actionDB
		.getAll()
		.then(actions => {
			res.json(actions);
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
});

// GET by ID with contexts
router.get('/:id', (req, res) => {
	const { id } = req.params;
	actionDB
		.getAction(id)
		.then(action => {
			const actionSelected = action[0];
			actionDB
				.getActionContexts(id)
				.then(contextSelected => {
					actionSelected.contexts = contextSelected;
					res.json(actionSelected);
				});
		});
});

// POST
router.post('/', (req, res) => {
	const newAction = req.body;
	actionDB
		.insert(newAction)
		.then(id => {
			res.json({ message: `New action created with id ${id}` });
		})
		.catch(err => {
			if (err.code === 'SQLITE_CONSTRAINT') {
				res.status(400).json({
					message: 'Action description and project id are required fields'
				});
			}
			else {
				res.status(500).json({ message: 'Could not create action' });
			}
		});
});

// UPDATE
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const update = req.body;
	actionDB
		.update(id, update)
		.then(response => {
			res.json({ message: `Action with id ${response} has been updated` });
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
});

// DELETE
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	actionDB
		.remove(id)
		.then(count => {
			res.json({ message: `${count} record has been deleted` });
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
});		


module.exports = router;
