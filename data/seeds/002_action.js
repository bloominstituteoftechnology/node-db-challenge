
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {description: 'planning', notes: 'thinking what we can do', completed: 0, project_id: 1},
        {description: 'planning', notes: 'thinking what we can do', completed: 0, project_id: 2},
        {description: 'planning', notes: 'thinking what we can do', completed: 0, project_id: 3}
      ]);
    });
};
