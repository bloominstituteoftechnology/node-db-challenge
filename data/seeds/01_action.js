
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {description: 'desc-1', note:'', completed: false, project_id:1},
        {description: 'desc-2', note:'', completed: false, project_id:1},
        {description: 'desc-3', note:'', completed: false, project_id:2},
        {description: 'desc-4', note:'', completed: false, project_id:3}
      ]);
    });
};
