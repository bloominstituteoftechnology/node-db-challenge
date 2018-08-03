
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: 'description 1', notes: 'note 1'},
        {project_id: 2, description: 'description 2', notes: 'note 2'},
        {project_id: 3, description: 'description 3', notes: 'note 3'}
      ]);
    });
};
