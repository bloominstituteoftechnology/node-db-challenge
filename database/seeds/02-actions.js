exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          description: 'Go to school',
          notes: 'At 8 am pst.',
          completed: true,
        },
        {
          id: 2,
          description: 'Eat lunch',
          notes: 'Probably chipotle.',
          completed: false,
        },
        {
          id: 3,
          description: 'Get a job',
          notes: "This shouldn't be too hard",
          completed: false,
        },
        {
          id: 4,
          description: 'Go to graduation',
          notes: 'At Husky Stadium',
          completed: true,
        },
      ]);
    });
};
