
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'act', notes: 'act notes', completed: 'false', project_id: 1 },
        { description: 'actions', notes: 'speak louder than words', completed: 'false', project_id: 1 },
      ]);
    });
};
