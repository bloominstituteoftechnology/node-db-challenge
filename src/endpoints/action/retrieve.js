const express = require('express');
const actionDb = require('../../db/action.js');
const validators = require('../../validators/action/update.js');

module.exports = {
	type: 'GET',
	url: '/:id',
	handler: (req, res) => {
		actionDb.get(req.params.id)
		  .then(action => {
		  	if(action != undefined){
		  		res.status(200).json(action);
		  	}else{
		  		res.status(404).json({ error: "Action not found."});
		  	}
		  })
		  .catch(err => {
		  	console.log(err);
			res.status(500).json({ error: "Could not retrieve action." });
		  })
	}
}