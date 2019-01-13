
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
     
        {name: 'Test1', description: 'project1', completed: false },
        {name: 'Test2', description: 'project1', completed: false },
        {name: 'Test3', description: 'project1', completed: false }

      ]);
    });
};
