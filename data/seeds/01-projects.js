
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'RDBMS Sprint Challenge',
        description: 'create a database and perform CRUD operations',
        completed: false },
        {name: 'Front End Sprint Challenge',
        description: 'create an application using React',
        completed: true },
      ]);
    });
};
