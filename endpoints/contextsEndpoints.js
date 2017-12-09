const express = require('express');

const contextsRouter = express.Router();

const db = require('../configuration/db.js');

contextsRouter.get('/', function(req, res) {
	db('contexts')
		.then(function(records) {
			res.status(200).json(records);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve contexts' });
		});
});

contextsRouter.post('/', function(req, res) {
	const context = req.body;
	db
		.insert(context)
		.into('contexts')
		.then(function() {
			res.status(200).json({ success: `${context} added!` });
		})
		.catch(function(err) {
			res.status(500).json({ err });
		});
});

contextsRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	db('contexts')
		.where('id', id)
		.del()
		.then(function() {
			res.status(200).json({ success: `context with id ${id} removed` });
		})
		.catch(function(err) {
			res.status(500).json({ error: err });
		});
});

module.exports = contextsRouter;
