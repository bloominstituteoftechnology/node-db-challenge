
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'project1_name', description: 'project text one', completed: false},
        {id: 2, name: 'project2_name', description: 'project text two', completed: false},
        {id: 3, name: 'project3_name', description: 'project text three', completed: true}
      ]);
    });
};
