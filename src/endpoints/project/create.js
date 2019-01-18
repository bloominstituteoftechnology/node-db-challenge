const express = require('express');
const projectDb = require('../../db/project.js');
const validators = require('../../validators/project/create.js');

module.exports = {
	type: 'POST',
	url: '/',
	handler: (req, res) => {
		const {name, description, completed} = req.body;
		let newProject = {
	  		name: name,
	  		description: description,
	  		completed: completed,
	  	}
		const newKeys = Object.keys(newProject);
		const validations = newKeys.map(key => validators[key](newProject));
		Promise.all(validations).then(() => {
			projectDb.insert(newProject)
			  .then(id => {
			  	res.status(201).json(id);
			  })
			  .catch(err => {
				res.status(500).json({ error: "There was an error while saving the new project to the database." });
			  });
		}).catch(err => res.status(err.statusCode || 500).json(err.stack));
	}
}
