
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1, 
          project_Id: 1,
          description: 'Create a graph.',
          notes: 'Did this graph change your opinion?',
          completed: false
        },
        {
          id: 2, 
          project_Id: 2,
          description: 'Choose a physique goal.',
          notes: 'Nothing is impossible.',
          completed: false
        },
        {
          id: 3, 
          project_Id: 3,
          description: 'Choose your portfolio layout',
          notes: 'Make sure to include everything, even the little things count.',
          completed: false
        }
      ]);
    });
};
