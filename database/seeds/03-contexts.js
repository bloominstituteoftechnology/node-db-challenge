exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('contexts').insert([
        { id: 1, context: 'UW' },
        { id: 2, context: 'Husky Stadium' },
        { id: 3, context: 'Home' },
        { id: 4, context: 'Office' },
        { id: 5, context: 'Laptop' },
      ]);
    });
};
