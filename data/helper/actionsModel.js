const db = require('../dbConfig.js');

module.exports = {
  createAction({description, notes, completed = false}){
    
    let query = db('actions');
    return query.insert({description, notes, completed});
  },
}