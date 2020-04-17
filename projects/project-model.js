const db = require('../data/dbConfig');

module.exports = {
  findProject,
  addProject
};

function findProject() {
  return db.select('*').from('projects');
}

function addProject(project) {
  return db
    .select('*')
    .from('projects')
    .insert(project);
}
