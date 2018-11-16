const express = require('express')
const router = express.Router()
const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

router.get('/', async (req, res) => {
    try {
        const projects = await db('projects')
        res.status(200).json(projects)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post('/', async (req, res) => {
    const { name, description } = req.body
    req.body = { ...req.body, project_completed: 0 }
    if (!name || !description) {
        res.status(404).json({ message: 'Please provide a name and a description for the project.' })
    }
    try {
        const project = await db('projects').insert(req.body)
        res.status(201).json(project)
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: 'An error occuried while trying to add the project to the database.' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const act = await db('projects')
            .innerJoin('actions', 'actions.project_id', 'projects.id')
            .select('actions.*')
            .where('projects.id', req.params.id)
        const proj = await db('projects').where('id', req.params.id)
        proj
            ? res.status(200).json({
                  ...proj[0],
                  actions : act,
              })
            : res.status(404).json({ errorMessage: 'A project with that ID does not exist.' })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: 'An error occuried while trying to access the project from the database.' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = await db('projects').where('id', req.params.id).del()
        if (id > 0) {
            res.status(200).json(id)
        }
        else {
            res.status(404).json({ errorMessage: 'That ID does not exist.' })
        }
    } catch (e) {
        res.status.json({ error: 'An error occuried while trying to delete that project from the database.' })
    }
})

router.put('/:id', async (req, res) => {
    const { name, description } = req.body
    const { id } = req.params
    if (!name && !description)
        res.status(404).json({ message: 'Please provide a name or description with your updated project.' })
    try {
        const projUp = await db('projects').update(req.body).where('id', id)
        projUp !== 0 ? res.status(200).json(projUp) : res.status(400).json({ errorMessage: 'That ID does not exist.' })
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router
