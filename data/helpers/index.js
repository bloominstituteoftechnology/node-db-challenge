const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  getProjects: function() {
    let query = db('projects');

    return query.then(projects => {
      return projects.map(project => mappers.projectMapper(project));
    });
  },
};
