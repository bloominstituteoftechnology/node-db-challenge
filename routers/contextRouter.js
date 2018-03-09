const express = require('express');

const contextDb = require('../controllers/contextController');

const contextRouter = express.Router();

contextRouter.get('/', (req, res) => {
	contextDb.getAll()
		.then((contexts) => {
			res.status(200).json(contexts);
		})
		.catch(err => {
			res.status(500).json({ error: `Could not retreive contexts ${err}` });
		});
});

contextRouter.post('/', (req, res) => {
	const context = req.body;
	contextDb.addcontext(context)
		.then((contextAdded) => {
			res.status(200).json(contextAdded);
		})
		.catch(err => {
			res.status(500).json({ error: `Could not add context ${err}` });
		});
});

contextRouter.get('/:id', (req, res) => {
	const { id } = req.params;
	contextDb.getById(id)
		.then((context) => {
			if (context.length > 0) {
				res.status(200).json(context);
			} else {
				res.status(422).json({ error: 'context not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not retreive contexts ${err}` });
		});
});

contextRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	contextDb.destroy(id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ success: true });
			} else {
				res.status(422).json({ error: 'context not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not remove context ${err}` });
		});
});

contextRouter.put('/:id', (req, res) => {
	const { id } = req.params;
	const context = req.body;

	contextDb.update(id, context)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ success: true });
			} else {
				res.status(422).json({ error: 'context not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not update context ${err}` });
		});
});

module.exports = contextRouter;
