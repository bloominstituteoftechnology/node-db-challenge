
//dependencies
const express = require('express')
const router = express.Router()
const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

//endpoints
router.get('/', async (req, res) => {
    try {
        const projects = await db('projects')
        res.status(200).json(projects)
    } catch (err) {
        res.status(500).json({ error: 'The projects could not be retrieved' })
    }
})
router.post('/', async (req, res) => {
    const { name, description } = req.body
    if (!name || !description) {
        res.status(404).json({ message: 'You must provide a name and a description to create a project.' })
    }
    try {
        const project = await db('projects').insert(req.body)
        res.status(201).json(project)
    } catch (err) {
        res.status(500).json({ error: 'The project could not be added.' })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const actions = await db('projects')
            .innerJoin('actions', 'actions.projectId', 'projects.id')
            .select('actions.*')
            .where('projects.id', req.params.id)
        const project = await db('projects').where({ 'id': req.params.id })
        project
            ? res.status(200).json({
                ...project,
                actions: actions,
            })
            : res.status(404).json({ errorMessage: 'A project with that ID could not be found.' })
    } catch (err) {
        res.status(500).json({ error: 'The project information could not be retrieved.' })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const count =
            (await db('projects').where({ 'id': req.params.id }).del()) &&
            (await db('actions').where({ 'projectId': req.params.id }).del())
        count > 0
            ? res.status(200).json(count)
            : res.status(400).json({ message: 'A project with that ID could not be found.' })
    } catch (err) {
        res.status(500).json({ error: 'The project could not be deleted.' })
    }
})
router.put('/:id', async (req, res) => {
    const { name, description } = req.body
    const { id } = req.params
    if (!name && !description)
        res.status(404).json({ message: 'Editing a project requires both a name and a description.' })
    try {
        const projUp = await db('projects').update(req.body).where({ 'id': id })
        projUp !== 0 ? res.status(200).json(projUp) : res.status(400).json({ errorMessage: 'A project with that ID could not be found.' })
    } catch (err) {
        res.status(500).json({ error: 'The project could not be saved.' })
    }
})
module.exports = router