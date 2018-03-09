exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          description: 'Go to graduation',
          notes: 'At Husky Stadium',
          completed: true,
        },
        {
          id: 2,
          description: 'Wake up for Lambda School',
          notes: 'By 8am pst.',
          completed: true,
        },
        {
          id: 3,
          description: 'Eat lunch',
          notes: 'Probably chipotle.',
          completed: false,
        },
        {
          id: 4,
          description: 'Finish capstone project.',
          completed: false,
        },
        {
          id: 5,
          description: 'Get a job',
          notes: "This shouldn't be too hard",
          completed: false,
        },
        {
          id: 6,
          description: 'Research new doctor',
          completed: false,
        },
        {
          id: 7,
          description: 'Fill in taxes',
          completed: false,
        },
        {
          id: 8,
          description: 'Read knex docs',
          completed: true,
        },
      ]);
    });
};
