//deleting existing db projects before adding new/seeding
exports.seed = function (knex) {
  return knex('projects').truncate() 
    .then(function () {
      return knex('projects').insert([
        { id: 1, name: 'build server', project_description: 'use node.js', project_id: 1, completed: 0 },
        { id: 2, name: 'deploy server', project_description: 'use heroku', project_id: 2, completed: 0 },
      ]);
    });
};
//above seeding db projects complete