exports.seed = function(knex, Promise) {
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Cut Grass', description: 'Mow the lawn', complete: false },
        {
          name: 'Jeopardy Score Tracker',
          description:
            'A project that keeps track of how poorly I do answering Jeopardy questions.',
          complete: false
        },
        { name: 'Lift that iron', description: 'Pump metal', complete: false }
      ]);
    });
};
