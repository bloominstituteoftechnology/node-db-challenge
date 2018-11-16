const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)



const controllersProject = {
  addProject (req, res, next) {
    if (!req.body.name || req.body.length <= 0) {
      next(new Error('EMPTY BODY'))
    }
    const projectName = req.body
    db('projects')
      .insert(projectName)
      .then((id) => res.status(201).json(id))
      .catch(next)
  },

  addAction (req, res, next) {
    if (!req.body.name || req.body.length <= 0) {
      next(new Error('EMPTY BODY'))
    }
    const actionName = req.body
    db('actions')
      .insert(actionName)
      .then((id) => res.status(201).json(id))
      .catch(next)
  },

  getProject (req, res, next) {
    db('projects')
        .join('actions', 'projects.id','actions.project_id')
      .where('projects.id', req.params.id)
      .then((project) => {
        if (!dish.length) {
          next(new Error('ID NOT FOUND'))
        }
        res.status(200).json(dish)
      })
      .catch(next)
  },

}