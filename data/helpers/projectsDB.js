const knex = require('knex')

const config = require('../../knexfile')

const projDB = knex(config.development)


module.exports ={
 pull: () => {
  return projDB("projects")
 },

 pullById: (id) => {
  return projDB('projects')
               .where({id: id})
 },

 place: (project) => {
  return projDB("projects")
               .insert(project)
               .then(ids => ({id: ids[0]}))
 },

 alter: (id, project) => {
  return projDB("projects")
               .where({id: id})
               .update(project)
 },

 clear: (id) => {
  return projDB("projects")
               .where({id: id})
               .del()
 }
}