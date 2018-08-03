const db = require('../db')

module.exports = {
  get: id => {
    return id ? db('action').where({id}) : db('action')
  },
  insert: (body) =>{
    return db('action').insert(body)
  }
}