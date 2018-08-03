const db = require('../db')

module.exports = {
  get: function(id) {
    return id ? db('action').where({id}) : db('action')
  }
}