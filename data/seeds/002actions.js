
exports.seed = function (knex, Promise) {
  return knex('actions')
    .truncate()
    .then(function () {
      return knex('actions').insert([
        { description: 'action 1 description', notes: 'NOTES HERE!', project_id: 1 },
        { description: 'action 2 description', notes: 'NOTES HERE!', project_id: 1 },

        { description: 'action 1 description', notes: 'NOTES HERE!', project_id: 2 },
        { description: 'action 2 description', notes: 'NOTES HERE!', project_id: 2 },
        { description: 'action 3 description', notes: 'NOTES HERE!', project_id: 2 },

        { description: 'action 1 description', notes: 'NOTES HERE!', project_id: 3 }
      ]);
    });
};