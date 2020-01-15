//deleting existing db projects before adding new/seeding
exports.seed = function (knex) {
  return knex('projects').truncate() 
    .then(function () {
      return knex('projects').insert([
        { id: 1, name: 'build server', project_description: 'use node.js', completed: false },
        { id: 2, name: 'deploy server', project_description: 'use heroku', completed: false },
      ]);
    });
};  

//above seeding db projects complete