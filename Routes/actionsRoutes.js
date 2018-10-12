
const express = require('express');
const router = express.Router();
const knex = require('knex')

const dbConfig = require('../knexfile')
const db = knex(dbConfig.development)


//Create
//create a new action
//-------------------------------------------
router.post('', (req, res) => {
	const {action_name, action_description, notes, completed, project_id } = req.body;
	// test to make sure name field is filled out
	if (!req.body.action_name || !req.body.action_description || !req.body.notes) {
		res.status(400).json({msg: 'please provide all information'})
	}
	db.insert({action_name, action_description, notes, completed, project_id }).into('actions')
	.then(response => {
		res.status(201).json(response)
	})
	.catch(error => {
		console.log(error)
		res.status(500).json({msg: 'there was an error creating action'})
	})

})

//Read
//get actions
//-------------------------------------------
router.get('', (req, res) => {
	db('actions')
	.then(response => {
		res.status(200).json(response)
	})
	.catch(error => {
		console.log(error)
		res.status(500).json({msg: 'there was an error getting actions'})
	})
})


//get an individual action, 
// its related project info, and its relavant contexts
router.get('/:id', (req, res) => {
	const { id }  = req.params
	db('projects')
	.join('actions', 'projects.id', '=', 'actions.project_id')
	.join('actions_context', 'actions.id', '=', 'actions_context.action_id')
	.join('context', 'context.id', '=', 'actions_context.context_id')
	.select('project_name', 'project_description', 'action_id', 'action_name', 'action_description', 'notes', 'context_name')
	.where('actions.id', id)
	.then(response => {
		console.log(response)
		let contextHolder = []
		for (let i = 0; i < response.length; i++){
			contextHolder.push({context_name: response[i].context_name})
		}
		res.status(200).json({
			action_id: response[0].action_id,
			action_name: response[0].action_name,
			action_description: response[0].action_description,
			notes: response[0].notes,
			contexts: contextHolder,
			project_information: [{project_name: response[0].project_name},{project_description: response[0].project_description}],
		})
	})
})

//Update
//update an action
//-------------------------------------------
// get an individual action
router.put('/:id', (req, res) => {
	const {id} = req.params
	const {action_name, action_description, notes, completed, project_id } = req.body;
	// test to make sure name field is filled out
	if (!req.body.action_name || !req.body.action_description || !req.body.notes) {
		res.status(400).json({msg: 'please provide all information'})
	}
	db('actions')
	.where({id})
	.update({action_name, action_description, notes, completed, project_id })
	.then(response => {
		res.status(201).json(response)
	})
	.catch(error => {
		console.log(error)
		res.status(500).json({msg: 'there was an error with getting your action'})
	})
})

//Delete
//delete an action
//-------------------------------------------
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	db('actions')
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