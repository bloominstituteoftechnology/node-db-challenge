
const express = require('express');
const router = express.Router();
const knex = require('knex')

const dbConfig = require('../knexfile')
const db = knex(dbConfig.development)


//Create
//create a new project
//-------------------------------------------
router.post('', (req, res) => {
	const {project_name, project_description, completed } = req.body;
	
	//test to make sure name field is filled out
	if (!req.body.project_name || !req.body.project_description ){
		return res.status(400).json({msg: 'please provide information'})
	}
	db.insert({project_name, project_description, completed }).into('projects')
		.then(response => {
			res.status(201).json(response)
		})
		.catch(error => {
			console.log(error)
			res.status(500).json({msg: "there was an error creating project"})
		})

})


//Read
//get projects
//-------------------------------------------
router.get('', (req, res) => {
	db('projects')
	.then(response => {
		res.status(200).json(response)
	})
	.catch(error => {
		console.log(error)
		res.status(500).json({msg: 'there was an error getting projects'})
	})
})

//get an idividual project
//and all its actions
//-------------------------------------------

router.get('/:id/actions', (req, res) => {
	const { id }  = req.params
	db('actions')
	.where({project_id: id})
	.then(actions => {
		//console.log(actions);
		db('projects')
		.where({id})
		.then(project => {

			res.status(200).json({
				id: project[0].id,
				project_name: project[0].project_name, 
				project_description: project[0].project_description,
				completed: project[0].completed,
				actions: actions,
			})

		})
	})
})

// Update
// update a project
// -------------------------------------------
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const {project_name, project_description, completed } = req.body;
	//test to make sure name field is filled out
	if (!req.body.project_name || !req.body.project_description ){
		return res.status(400).json({msg: 'please provide information'})
	}

	db('projects')
	.where({id})
	.update({project_name, project_description, completed })
	.then(response => {
		res.status(200).json(response)
	})
	.catch(error => {
		console.log(error)
		res.status(500).json({msg: 'there was an error updating project'})
	})
})

// Delete
// delete a project
// -------------------------------------------
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	db('projects')
	.where({id})
	.del()
	.then(response => {
		res.status(200).json(response)
	})
	.catch(error => {
		res.status(500).json(error)
	})
})


module.exports = router;

