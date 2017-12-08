const express = require('express');
const knex = require('../../db.js');
const context = express.Router();

context.get('/', function(req, res) {
	const context = knex('context')
		.then(function(context) {
			res.status(200).json(context);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve the context' });
		});
});

context.get('/:id', function(req, res) {
	const { id } = req.params;

	const context = knex('context')
		.where('id')
		.then(function(context) {
			if (context) {
				res.status(200).json(context);
			} else {
				res.status(404).json(null);
			}
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve the context' });
		});
});

context.post('/', function(req, res) {
	const { context } = req.body;

	knex
		.insert(context)
		.into('context')
		.then(function(context) {
			res.status(200).json(context);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not create context' });
		});
});

module.exports = context;
