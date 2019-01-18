const db = require('../dbConfig.js');

module.exports = {
  createAction({project_id, description, notes, completed = false}){

    let query = db('actions');
    return query.insert({project_id, description, notes, completed});
  },
}