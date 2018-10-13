const express = require('express')
const db = require('./access.js')
const router = express.Router()

router.route('/projects')
  .get((req, res) => {
    db.getProjects()
      .then(projects => res.status(201).json(projects))
      .catch(err => res.status(500).json({ error: 'The projects could not be retrieved.' }))
  })
  .post((req, res) => {
    const project = req.body
    db.addProject(project)
      .then(newProject => res.status(201).json(newProject))
      .catch(err => res.status(500).json({ error: 'The project could not be added.' }))
})

router.route('/actions')
  .get((req, res) => {
    db.getActions()
      .then(actions => res.status(201).json(actions))
      .catch(err => res.status(500).json({ error: 'The actions could not be retrieved.' }))
  })
  .post((req, res) => {
    const action = req.body
    db.addAction(action)
      .then(newAction => res.status(201).json(newAction))
      .catch(err => res.status(500).json({ error: 'The action could not be added.' }))
})

router.route('/projects/:id')
  .get((req, res) => {
    const { id } = req.params
    db.getProjectById(id)
      .then(project => {
        if (!project || project < 1) return res.status(404).json({ error: 'The project with the specified ID was not found.' });
        return db.addActionsToProject(id)
          .then(actions => {
            project.actions = actions
            res.status(200).json(project)
          })
          .catch(err => res.status(500).json({ error: 'The action with that project ID was not found.' }))
      })
      .catch(err => res.status(500).json({ error: 'The project with the specified ID could not be retrieved.' }));
  })

module.exports = router
