		const express = require('express')
		const router = express.Router()
		router.use(express.json())
	const DB_projects = require('../data/DBAccess.js')

router.get('/', (req, res) => {
  DB_projects.getprojects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch projects' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  DB_projects.getproject(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch project' })
    })
})

router.post('/', (req, res) => {
  const project = req.body
  DB_projects.postProject(project)
    .then(project => {
      res.status(201).json({ message: 'Successfully added project', project: project })
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to add new project' })
    })
})
	


		module.exports = router