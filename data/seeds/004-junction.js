
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('junction')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('junction').insert([
        {actions_id: 1, projects_id: 1},
        {actions_id: 2, projects_id: 2},
        {actions_id: 3, projects_id: 4},
        {actions_id: 4, projects_id: 4},
        {actions_id: 5, projects_id: 4},
      ]);
    });
};
