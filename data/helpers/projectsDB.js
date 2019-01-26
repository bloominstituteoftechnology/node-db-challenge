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

 place = (project) => {
  return projDB("projects")
 }
}