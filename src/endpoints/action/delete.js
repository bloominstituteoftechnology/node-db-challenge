const express = require('express');
const actionDb = require('../../db/action.js');

module.exports = {
	type: 'DELETE',
	url: '/:id',
	handler: (req, res) => {
		const { id } = req.params;
		actionDb.get(id)
		.then(action => {
		  	if (action != undefined) {
		  		actionDb.remove(id)
		  		.then(numRemoved => {
		  			if(numRemoved === 1){
						res.status(202).json({message: "Action successfully deleted."});
					}else{
						res.status(202).json({message: "Request accepted but no object deleted."});
					}
		  		})
		  		.catch(err => {
		  			res.status(500).json({ error: "The action could not be removed." });
		  		});
		  	}else{
		  		res.status(404).json({ message: "The action with the specified ID does not exist." });
		  	}
		})
		.catch(err => {
			res.status(500).json({ error: "The action information could not be retrieved." });
		})
	}
}
