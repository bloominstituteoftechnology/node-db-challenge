const express = require('express');
const actionDb = require('../../db/action.js');
const projectDb = require('../../db/project.js');
const validators = require('../../validators/action/update.js');

module.exports = {
	type: 'PUT',
	url: '/:id',
	handler: (req, res) => {
		const {project_id, description, notes, completed} = req.body;
		const {id} = req.params;
		let modifiedAction = {
	  		description: description,
	  		notes: notes,
	  		completed: completed,
	  		project_id: project_id
	  	}
	  	console.log(modifiedAction);
		const changedKeys = Object.keys(modifiedAction);
		const validations = changedKeys.map(key => validators[key](modifiedAction));
		Promise.all(validations).then(() => {
			projectDb.get(project_id)
			.then(project => {
				if(project != undefined){
					actionDb.update(id, modifiedAction)
					.then(response => {
						if(response === undefined){
							res.status(404).json({message: "Action not found."});
						}else{
							res.status(200).json(response);
						}
					})
					.catch(err => {
						res.status(500).json({ error: "The actions information could not be retrieved." });
					});
				}else{
					res.status(400).json({ error: "Please provide valid project ID." });
				}
			})
			.catch(err => {
				res.status(500).json({ error: "The project information could not be retrieved." });
			})
		}).catch(err => res.status(err.statusCode || 500).json(err.message));
	}
}