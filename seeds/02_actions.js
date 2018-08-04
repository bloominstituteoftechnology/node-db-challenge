exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        { id: 1, description: 'create', notes: 'POST' },
        { id: 2, description: 'read', notes: 'GET' },
        { id: 3, description: 'update', notes: 'PUT' }
      ]);
    });
};
