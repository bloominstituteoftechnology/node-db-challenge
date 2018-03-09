exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('contexts').insert([
        { id: 1, context: 'home' },
        { id: 2, context: 'office' },
        { id: 3, context: 'laptop' },
        { id: 4, context: 'UW' },
      ]);
    });
};
