const express = require('express');
const { actionDb } = require('../data/models/index.js');

const router = express.Router();

router.post('/', (req, res) => {
	const newAction = req.body;
	if (!newAction.description) {
		return res.status(401).json({ error: 'Description of new action cannot be empty.' });
	}
	if (!newAction.project_id) {
		return res.status(401).json({ error: 'Project_id of new action cannot be empty.' });
	}
	if (newAction.completed === undefined) newAction.completed = 0; // default value
	actionDb
		.addAction(newAction)
		.then(id => {
			if (id === 'noProjectId') {
				return res.status(401).json({ error: `Project with ID ${ newAction.project_id } does not exist. You cannot create an action for a project that does not exist.`});
			}
			return res.status(201).json(id.id[0]);
		})
		.catch(err => res.status(500).json({ error: `Server failed to POST new action: ${ err }`}));
});

module.exports = router;
