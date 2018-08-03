
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'Enroll in Lambda School', notes: 'They make this pretty easy', completed: 1, project_id: 1},
        { description: 'Study Hard', notes: 'This is maybe not so easy', completed: 0, project_id: 1},
        { description: 'Graduate', notes: 'I\'m not sure how hard this part is', completed: 0, project_id: 1},
        { description: 'Watch a bunch of Redux videos', notes: 'Ohhh yeahhh!!!', completed: 1, project_id: 2},
        { description: 'Practice', notes: 'Ohhhh noooo!!!', completed: 0, project_id: 2},
        { description: 'Watch Funky bass players', notes: 'Study the greats, so they say', completed: 1, project_id: 3},
        { description: 'repeat', notes: 'Just keep gettin down', completed: 0, project_id: 3},
      ]);
    });
};
