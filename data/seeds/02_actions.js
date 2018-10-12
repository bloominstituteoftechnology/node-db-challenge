
exports.seed = function(knex, Promise) {
  return knex('actions').truncate()
    .then(function () {
      return knex('actions').insert([
        {project_id: 'project 3', description: 'description 1', notes: 'notes 1'},
        {project_id: 'project 2', description: 'description 2', notes: 'notes 2'},
        {project_id: 'project 1', description: 'description 3', notes: 'notes 3'},
        {project_id: 'project 3', description: 'description 4', notes: 'notes 4'},
        {project_id: 'project 2', description: 'description 5', notes: 'notes 5'},
        {project_id: 'project 1', description: 'description 6', notes: 'notes 6'},
      ]);
    });
};
