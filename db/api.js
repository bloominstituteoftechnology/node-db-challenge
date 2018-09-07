const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

const getActions = async () => {
  return await db.select().table('action')
}

const getAction = async (id) => {
  return await db.select().table('action').where('id', id)
}

const getProjects = async () => {
  return await db.select().table('project')
}

const getProject = async (id) => {
  return await db.select().table('project').where('id', id)
}

const addProject = async (project) => {
  await db.insert(project).table('project')
  return project.id
}

const addAction = async (action) => {
  await db.insert(action).table('action')
  return action.id
}

const toggleAction = async (id) => {
  await db.select('flag').table('action').where('id', id).update({ flag: !flag })
  return id
}

const toggleProject = async (id) => {
  await db.select('flag').table('project').where('id', id).update({ flag: !flag })
  return id
}

const deleteAction = async (id) => {
  await db.select().table('action').where('id', id).del()
  return id
}

const deleteProject = async (id) => {
  await db.select().table('project').where('id', id).del()
  return id
}

const getProjectAndItsActions = async (id) => {
  const projectArray = await db.select().table('project').where('id', id)
  const project = projectArray[0]

  const projectActionIdArray = await db.select('action_id').table('tracker').where('project_id', id)
  const projectActionArray = await Promise.all(projectActionIdArray.map( async (idObject) => {
    const id = idObject.action_id
    const tempArray = await db.select().table('action').where('id', id)
    return tempArray[0]
  }))

  return {
    ...project,
    actions: projectActionArray
  }

}

module.exports = {
  getActions,
  getAction,
  getProjects,
  getProject,
  addProject,
  addAction,
  toggleAction,
  toggleProject,
  deleteAction,
  deleteProject,
  getProjectAndItsActions
}