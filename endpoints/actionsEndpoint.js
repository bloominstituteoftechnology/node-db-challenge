const express = require('express');

const actionsRouter = express.Router();

const db = require('../configuration/db.js');

actionsRouter.get('/', function(req, res) {
	db('actions')
		.then(function(records) {
			res.status(200).json(records);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve the actions' });
		});
});

actionsRouter.post('/', function(req, res) {
	const action = req.body;
	db
		.insert(action)
		.into('actions')
		.then(function(records) {
			res.status(200).json({ success: `${action} added!` });
		})
		.catch(function(err) {
			res.status(500).json({ err });
		});
});

actionsRouter.delete('/:id', function(req, res) {
	const { id } = req.params;
	db('actions')
		.where('id', id)
		.del()
		.then(function() {
			res.status(200).json({ success: `action with id ${id} removed` });
		})
		.catch(function(err) {
			res.status(500).json({ error: err });
		});
});

module.exports = actionsRouter;