const db = require('../db')

module.exports = {
  get: (id, tblName) => {
    return id ? db(tblName).where({id}) : db(tblName)
  },
  insert: (body, tblName) =>{
    return db(tblName).insert(body)
  },
  update: (id, body, tblName) => {
    return db(tblName).where({id}).update(body)
  },
  delete: (id, tblName) => {
    return db(tblName).where({id}).del()
  }  
}