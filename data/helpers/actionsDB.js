const knex = require('knex')
const config = require('../../knexfile')
const actsDB = knex(config.development)

module.exports = {
 pull: () => {
  return actsDB("actions")
 },

 pullById: (id) => {
  return actsDB("actions")
               .where({id: id})
 },

 place: (action) => {
  return actsDB("actions")
               .insert(action)
               .then(ids => ({id: ids[0]}))
 },

 alter: (id, action) => {
  return actsDB("actions")
               .where({id: id})
               .update(action)
 },

 clear: (id) => {
  return actsDB("actions")
               .where({id: id})
               .del()
 }
}