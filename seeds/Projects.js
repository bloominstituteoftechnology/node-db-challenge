
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {name: 'Clean House', description: 'Tidy up all rooms'},
        {name: 'Clean Office Windows', description: 'They need to be really clear'},
        {name: 'Organize Office', description: 'Shelves are a mess'},
      ]);
    });
};
