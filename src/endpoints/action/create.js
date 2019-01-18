const express = require('express');
const actionDb = require('../../db/action.js');
const projectDb = require('../../db/project.js');
const validators = require('../../validators/action/create.js');

module.exports = {
	type: 'POST',
	url: '/',
	handler: (req, res) => {
		console.log(req.body);
		const {project_id, description, notes, completed} = req.body;
		let newAction = {
	  		project_id: project_id,
	  		description: description,
	  		notes: notes,
	  		completed: completed
	  	}
	  	console.log(project_id);
		const newKeys = Object.keys(newAction);
		const validations = newKeys.map(key => validators[key](newAction));
		Promise.all(validations).then(() => {
			projectDb.get(project_id)
			.then(project => {
				if(project != undefined){
					actionDb.insert(newAction)
					  .then(id => {
					  	res.status(201).json(id);
					  })
					  .catch(err => {
						res.status(500).json({ error: "There was an error while saving the action to the database." });
					  });
				}else{
					res.status(400).json({ error: "Please provide valid project ID." });
				}
			})
			.catch(err => {
				res.status(500).json({ error: "The project information could not be retrieved." });
			})
		}).catch(err => {
			res.status(err.statusCode || 500).json(err.message);
		});
	}
}
