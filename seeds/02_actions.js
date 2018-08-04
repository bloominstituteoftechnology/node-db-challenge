exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        { id: 1, description: 'create' },
        { id: 2, description: 'read' },
        { id: 3, description: 'update' }
      ]);
    });
};
