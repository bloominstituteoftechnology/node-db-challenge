exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('context').insert([
        { context: 'home' },
        { context: 'office' },
        { context: 'at computer' }
      ]);
    });
};
