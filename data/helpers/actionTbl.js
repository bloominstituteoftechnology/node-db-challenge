const db = require('../db')

module.exports = {
  get: id => {
    return id ? db('action').where({id}) : db('action')
  },
  insert: (body) =>{
    return db('action').insert(body)
  },
  update: (id, body) => {
    return db('action').where({id}).update(body)
  },
  delete: (id) => {
    return db('action').where({id}).del()
  }  
}