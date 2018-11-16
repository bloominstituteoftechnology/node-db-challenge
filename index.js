const express = require("express")
const knex = require("knex")
const knecConfig = require("./knexfile.js")

const db = knex(knecConfig.development)
const server = express()

server.use(express.json())

const get = tbl => {
  server.get(`/api/${tbl}`, (req, res) => {
    db(tbl)
      .then(items => res.status(200).json(items))
      .catch(err => res.status(500).json(err))
  })
}

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params
  const projectQ = db('projects').where({ id })
  const actionsQ = db('projects as p')
    .join('actions as a', 'a.project_id', 'p.id')
    .where('p.id', id)
    
  Promise.all([projectQ, actionsQ])
    .then(projectInfo => {
      let project = projectInfo[0][0]
      let actions = projectInfo[1]
      project.complete = !!project.complete
      actions.forEach(action => action.complete = !!action.complete)
      const result = { ...project, actions: actions }
      res.status(200).json(result)
    })
    .catch(err => res.status(500).json(err))
})

server.get('/api/actions/:id', (req, res) => {
  const { id } = req.params
  db('actions')
    .where( {id} )
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json({ error: 'Action not found', err }))
})

const add = tbl => {
  server.post(`/api/${tbl}`, (req, res) => {
    db(tbl)
      .insert(req.body)
      .then(id => res.status(201).json({ message: `Item added (id: ${id})` }))
      .catch(err => res.status(500).json({ error: 'Item failed to add, ensure required fields are filled out', err }))
  })
}

const update = tbl => {
  server.put(`/api/${tbl}/:id`, (req, res) => {
    const { id } = req.params
    const changes = req.body
    db(tbl)
      .where({ id })
      .update(changes)
      .then(count => res.status(200).json({ message: `${count} item(s) updated` }))
      .catch(err => res.status(500).json({ error: 'Item failed to update, ensure required fields are filled out', err }))
  })
}

const remove = tbl => {
  server.delete(`/api/${tbl}/:id`, (req, res) => {
    const { id } = req.params
    db(tbl)
      .where({ id })
      .delete()
      .then(count => res.status(200).json({ message: `${count} item(s) deleted` }))
      .catch(err => res.status(500).json({ error: 'Item failed to delete', err }))
  })
}

get('projects')
get('actions')
add('projects')
add('actions')
update('projects')
update('actions')
remove('projects')
remove('actions')

const port = 9000;
server.listen(port, function() {
    console.log(`\n🌻🌻🌻🌻🌻\n`)
});