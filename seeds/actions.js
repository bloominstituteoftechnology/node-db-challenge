
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Does something cool',
         notes: 'TBD',
         completed: false },
        {description: 'Does something else',
         notes: 'TBD',
         completed: false },
        {description: 'Does another thing',
         notes: 'TBD',
         completed: false },
      ]);
    });
};
