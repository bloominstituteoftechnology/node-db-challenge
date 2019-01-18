const express = require('express');
const projectDb = require('../../db/project.js');

module.exports = {
	type: 'GET',
	url: 's/',
	handler: (req, res) => {
		projectDb.get()
		  .then(projects => {
		  	res.status(200).json(projects);
		  })
		  .catch(err => {
		  	console.log(err);
			res.status(500).json({ error: "Could not retrieve projects." });
		  })
	}
}