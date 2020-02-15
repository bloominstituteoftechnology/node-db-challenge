
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, projects_id: 1, notes: 'Study hard', description: 'Study study study', completed: true },
        {id: 2, projects_id: 1, notes: 'Complete Sprint challenge', description: 'Not too bad', completed: false },
        {id: 3, projects_id: 2, notes: 'Watch videos', description: 'Complete challenges after', completed: false },
        {id: 4, projects_id: 3, notes: 'Check off those boxes', description: 'Check check check', completed: true }
      ]);
    });
};