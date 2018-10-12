
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'RDBMS', description:'Create an application to track projects and actions', completed:false},
        {name: 'Lambda Times', description:'Use React to create a Lambda News page', completed:false},
        {name: 'Applied Javascript', description:'Use javascript to add functionality to the provided Lambda Newspage', completed:false}
      ]);
    });
};
