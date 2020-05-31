
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { id: 1, project_name: 'rowValue1', project_desc: 'rowValue1', completed: 0 }
      ]);
    });
};
