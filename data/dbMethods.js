const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

module.exports = {
  postProject: project => db('projects').insert(project),
  postAction: action => db('actions').insert(action),
  getProjectById: async id => {
    const convertBinToBool = list =>
      list.map(item => ({ ...item, completed: item.completed === 1 }))

    const project = await db('projects')
      .where({ id })
      .then(info => convertBinToBool(info))

    const actions = await db('projects as p')
      .join('actions as a', { 'p.id': 'a.project_id' })
      .select('a.id', 'a.description', 'a.notes', 'a.completed')
      .where({ 'p.id': id })
      .then(info => convertBinToBool(info))

    const data = { ...project[0], actions }

    return data
  }
}
