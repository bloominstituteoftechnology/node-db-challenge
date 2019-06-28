module.exports = {
  find,
  findById,
  add
}
const db = require('./dbcon.js')

function find(){
  return db('datachallenge');
}
function findById(){
  return db('datachallenge')
  .where({id})
  .first()
}
function add(data){
  return db('datachallenge').insert(data, 'id');
}