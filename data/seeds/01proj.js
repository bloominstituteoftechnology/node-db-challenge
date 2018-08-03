exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'Take over the world!',
          description: 'one day at a time',
          done: 0,
        },
        {
          id: 2,
          name: 'Graduate Lambda School',
          description: 'finish my full stack education',
          done: 0,
        },
      ]);
    });
};
