
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project: 'Project Whambam', completed: false},
        {id: 2, project: 'Project Murky', completed: false},
        {id: 3, project: 'Project Nova', completed: false}
      ]);
    });
};
