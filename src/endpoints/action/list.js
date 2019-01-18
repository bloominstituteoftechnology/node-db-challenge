const express = require('express');
const actionDb = require('../../db/action.js');

module.exports = {
	type: 'GET',
	url: 's/',
	handler: (req, res) => {
		actionDb.get()
		  .then(actions => {
		  	res.status(200).json(actions);
		  })
		  .catch(err => {
		  	console.log(err);
			res.status(500).json({ error: "Could not retrieve actions." });
		  })
	}
}