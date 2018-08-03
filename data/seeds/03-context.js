exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('contexts').insert([
        {
          id: 1,
          name: 'home',
        },
        {
          id: 2,
          name: 'office',
        },
        {
          id: 3,
          name: 'computer',
        },
      ]);
    });
};
