
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project: 'Project Load', description: 'Yo', completed: false},
        {id: 2, project: 'Project Fail', description: 'Meow', completed: false},
        {id: 3, project: 'Project Complete', description: 'AMAS',completed: false}
      ]);
    });
};
