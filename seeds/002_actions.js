exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'react', notes: 'add CSS', projectId: 1 },
        { description: 'redux', notes: 'add multiple reducers', projectId: 1 },
        { description: 'boostrap', notes: 'or react', projectId: 1 }
      ]);
    });
};
