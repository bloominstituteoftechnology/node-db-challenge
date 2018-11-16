
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'description 1', note: 'Note 1', completed: false, project_id: 1},
        {description: 'description 2', note: 'Note 2', completed: false, project_id: 1},
        {description: 'description 3', note: 'Note 3', completed: false, project_id: 2}
      ]);
    });
};
