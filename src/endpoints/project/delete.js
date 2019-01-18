const express = require('express');
const projectDb = require('../../db/project.js');
const validators = require('../../validators/action/create.js');

module.exports = {
	type: 'DELETE',
	url: '/:id',
	handler: (req, res) => {
		projectDb.get(req.params.id)
		.then(project => {
		  	if (project != undefined) {
		  		projectDb.remove(req.params.id)
		  		.then(numRemoved => {
		  			if(numRemoved === 1){
						res.status(202).json({message: "Project successfully deleted."});
					}else{
						res.status(202).json({message: "Request accepted but no object deleted."});
					}
		  		})
		  		.catch(err => {
		  			res.status(500).json({ error: "The project could not be removed." });
		  		});
		  	}else{
		  		res.status(404).json({ message: "The project with the specified ID does not exist." });
		  	}
		})
		.catch(err => {
			res.status(500).json({ error: "The project information could not be retrieved." });
		})
	}
}
