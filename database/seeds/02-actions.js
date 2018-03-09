
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'research topic', notes: 'use online and personal resources', completed: false},
        {id: 2, description: 'set timeline', notes: 'timeline should include deadlines', completed: false},
        {id: 3, description: 'check pricing', notes: 'top 3 options', completed: false}
      ]);
    });
};
