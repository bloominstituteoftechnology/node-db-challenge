exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1, 
          projectId: 1,
          description: 'study many-to-many relationships',
          notes: 'create a table with foreign keys of interest' 
        },
        {
          id: 2, 
          projectId: 2,
          description: 'create navigation component',
          notes: 'make it responsive'
        },
        {
          id: 3, 
          projectId: 3,
          description: 'organize books',
          notes: 'keep current reading list up front'
        }
      ]);
    });
};
