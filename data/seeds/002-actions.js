exports.seed = function(knex, Promise) {
  return knex('actions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'Put gas in',
          notes: "Dont't forget that...",
          complete: false
        },
        {
          project_id: 1,
          description: 'Start',
          notes: 'Ur strong...',
          complete: false
        },
        {
          project_id: 2,
          description: 'Create a view layer with Vue',
          notes: "Dont't forget to create a mock up.",
          complete: false
        },
        {
          project_id: 2,
          description: 'Watch Jeopardy',
          notes: 'See if you can get any of those answers correct.',
          complete: false
        },
        {
          project_id: 2,
          description: 'Research react hooks',
          notes: 'Could be a good project to experiment with that.',
          complete: false
        },
        {
          project_id: 3,
          description: 'Protein?',
          notes: 'Eat whole eggs.',
          complete: false
        },
        {
          project_id: 3,
          description: 'Do some reps',
          notes: 'arms.',
          complete: false
        },
        {
          project_id: 3,
          description: 'Do some leg reps',
          notes: 'not arms.',
          complete: false
        },
        {
          project_id: 3,
          description: 'Cool down',
          notes: 'Jog.',
          complete: false
        },
        {
          project_id: 3,
          description: 'Work out',
          notes: 'go to gym.',
          complete: false
        }
      ]);
    });
};
