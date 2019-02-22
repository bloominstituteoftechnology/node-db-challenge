const knex = require('knex')
const config = require('../../knexfile')
const actionsDB = knex(config.development)

module.exports = {
 pull: () => {
  return actionsDB("actions")
 },

 pullById: (id) => {
  return actionsDB("actions")
               .where({id: id})
 },

 place: (action) => {
  return actionsDB("actions")
               .insert(action)
               .then(ids => ({id: ids[0]}))
 },

 alter: (id, action) => {
  return actionsDB("actions")
               .where({id: id})
               .update(action)
 },

 clear: (id) => {
  return actionsDB("actions")
               .where({id: id})
               .del()
 }
}