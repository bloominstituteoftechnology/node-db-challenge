const db = require('../data/dbConfig');

module.exports = {
  findResources,
  addResources
};

function findResources() {
  return db.select('*').from('resources');
}

function addResources(data) {
  return db
    .select('*')
    .from('resources')
    .insert(data);
}
