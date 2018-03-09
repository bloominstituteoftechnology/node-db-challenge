const express = require('express');

const actionDb = require('../controllers/actionController');

const actionRouter = express.Router();

actionRouter.get('/', (req, res) => {
	actionDb.getAll()
		.then((actions) => {
			res.status(200).json(actions);
		})
		.catch(err => {
			res.status(500).json({ error: `Could not retreive actions ${err}` });
		});
});

actionRouter.post('/', (req, res) => {
	const action = req.body;
	actionDb.addaction(action)
		.then((actionAdded) => {
			res.status(200).json(actionAdded);
		})
		.catch(err => {
			res.status(500).json({ error: `Could not add action ${err}` });
		});
});

actionRouter.get('/:id', (req, res) => {
	const { id } = req.params;
	actionDb.getById(id)
		.then((action) => {
			if (action.length > 0) {
				res.status(200).json(action);
			} else {
				res.status(422).json({ error: 'action not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not retreive actions ${err}` });
		});
});

actionRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	actionDb.destroy(id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ success: true });
			} else {
				res.status(422).json({ error: 'action not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not remove action ${err}` });
		});
});

actionRouter.put('/:id', (req, res) => {
	const { id } = req.params;
	const action = req.body;

	actionDb.update(id, action)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ success: true });
			} else {
				res.status(422).json({ error: 'action not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not update action ${err}` });
		});
});

module.exports = actionRouter;
