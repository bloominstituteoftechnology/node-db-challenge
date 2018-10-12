const express = require('express');
const { actionDb } = require('../data/models/index.js');

const router = express.Router();

// get all actions
router.get('/', (req, res) => {
	actionDb
		.getAllActions()
		.then(actions => {
			if (!actions.length) {
				return res.status(200).json({ message: 'There are no actions in the database. You should add a project first, then give it some actions.' });
			}
			return res.status(200).json(actions);
		})
		.catch(err => res.status(500).json({ error: `Server failed to GET all actions: ${ err }` }));
});

// get an action with a given ID
router.get('/:id', (req, res) => {
	const { id } = req.params;
	actionDb
		.getAction(id)
		.then(action => {
			if (!action.length) {
				return res.status(404).json({ error: `Action with ID ${ id } does not exist.` });
			}
			return res.status(200).json(action);
		})
		.catch(err => res.status(500).json({ error: `Server failed to GET action with ID ${ id }: ${ err }`}));
});

// add a new action to the database
router.post('/', (req, res) => {
	const newAction = req.body;
	if (!newAction.description) {
		return res.status(401).json({ error: 'Description of new action cannot be empty.' });
	}
	if (!newAction.project_id) {
		return res.status(401).json({ error: 'Project_id of new action cannot be empty.' });
	}
	if (newAction.completed === undefined || newAction.completed === '') {
		newAction.completed = false; // default value
	}
	if (newAction.completed !== true && newAction.completed !== false) {
		return res.status(401).json({ error: `Completed flag of new action cannot be ${ newAction.completed }. It must be either true or false.` });
	}
	actionDb
		.addAction(newAction)
		.then(id => {
			if (id === 'noProjectId') {
				return res.status(404).json({ error: `Project with ID ${ newAction.project_id } does not exist. You cannot create an action for a project that does not exist.`});
			}
			return res.status(201).json(id.id[0]);
		})
		.catch(err => res.status(500).json({ error: `Server failed to POST new action: ${ err }`}));
});

// update an action
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const updatedAction = req.body;
	for (key in updatedAction) {
		if (updatedAction[key] === '') {
			res.status(401).json({ error: `${ key } cannot be empty.` });
		}
	}
	actionDb
		.updateAction(id, updatedAction)
		.then(updateBool => {
			if (updateBool === 'noProjectId') {
				return res.status(404).json({ message: `Project with ID ${ updatedAction.project_id } does not exist. You cannot update an action to a project that does not exist.` });
			} else if (updateBool) {
				return res.status(200).json({ message: `Action with ID ${ id } updated successfully.` });
			}
			return res.status(404).json({ error: `Action with ID ${ id } does not exist.` });
		})
		.catch(err => res.status(500).json({ error: `Server failed to PUT updated action: ${ err }` }));
});

// delete an action
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	actionDb
		.deleteAction(id)
		.then(delBool => {
			if (delBool) {
				return res.status(200).json({ message: `Action with ID ${ id } deleted successfully.` });
			}
			return res.status(404).json({ error: `Action with ID ${ id } does not exist.` });
		})
		.catch(err => res.status(500).json({ error: `Server failed to DELETE action: ${ err }` }));
});

module.exports = router;
