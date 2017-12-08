const express = require('express');
const knex = require('../../db.js');
const actions = express.Router();

actions.get('/', function(req, res) {
	knex('actions')
		.then(function(actions) {
			res.status(200).json(actions);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve the actions' });
		});
});

actions.get('/:id', function(req, res) {
	const { id } = req.params;

	knex('actions')
		.where('id', id)
		.then(function(action) {
			if (action) {
				res.status(200).json(action);
			} else {
				res.status(404).json(null);
			}
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve the action' });
		});
});

actions.post('/', function(req, res) {
	const { action } = req.body;

	knex
		.insert(action)
		.into('actions')
		.then(function(actions) {
			res.status(200).json(actions);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not create the actions' });
		});
});

module.exports = actions;
