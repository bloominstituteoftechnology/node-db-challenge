
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { description: 'action description', notes: 'action notes', project_id: 1 },
        { description: 'action description', notes: 'action notes', project_id: 1 },
        { description: 'action description', notes: 'action notes', project_id: 1 },
        { description: 'action description', notes: 'action notes', project_id: 2 },
        { description: 'action description', notes: 'action notes', project_id: 2 },
        { description: 'action description', notes: 'action notes', project_id: 2 },
        { description: 'action description', notes: 'action notes', project_id: 3 },
        { description: 'action description', notes: 'action notes', project_id: 3 }
      ]);
    });
};
