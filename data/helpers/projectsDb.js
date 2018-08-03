const db = require('../db');

module.exports = {
  getProject: id => {
    return (
      db('projects')
        .where('id', Number(id))
        .first()
    )
  },

  getActions: id => {
    return (
      db('actions')
        .where('project_id', Number(id))
        // .first()
    )
  }
}