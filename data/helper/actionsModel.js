const db = require('../dbConfig.js');

module.exports = {
  getAction() {
    let query = db('actions');
    return query;
  },

  createAction({project_id, description, notes, completed = false}){

    let query = db('actions');
    return query.insert({project_id, description, notes, completed});
  },

  update(id, {notes, description, completed = false}){

    let query = db('actions');
    return query.where({id})
    .update({notes, description, completed})
  },

  remove(id){

    let query = db('actions');
    return query.where({id})
    .del()
  },
}