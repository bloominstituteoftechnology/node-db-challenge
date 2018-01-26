
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Project1', description: 'decription1', completed : true},
        {id: 2, name: 'Project2', description: 'description2'},
        {id: 3, name: 'Project3', description: 'descripition3', completed :true},
      ]);
    });
};
