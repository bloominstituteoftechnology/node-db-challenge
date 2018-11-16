
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { description: 'action description 1', notes: 'action notes 1', project_id: 1 },
        { description: 'action description 1', notes: 'action notes 1', project_id: 1 },
        { description: 'action description 1', notes: 'action notes 1', project_id: 1 },
        { description: 'action description 2', notes: 'action notes 2', project_id: 2 },
        { description: 'action description 2', notes: 'action notes 2', project_id: 2 },
        { description: 'action description 2', notes: 'action notes 2', project_id: 2 },
        { description: 'action description 3', notes: 'action notes 3', project_id: 3 },
        { description: 'action description 3', notes: 'action notes 3', project_id: 3 }
      ]);
    });
};
