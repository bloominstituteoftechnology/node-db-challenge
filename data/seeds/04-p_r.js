
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('p_r').del()
    .then(function () {
      // Inserts seed entries
      return knex('p_r').insert([
        {project_id: 1, resource_id: 1},
        {project_id: 1, resource_id: 2},
        {project_id: 2, resource_id: 1},
        {project_id: 2, resource_id: 2},
        {project_id: 3, resource_id: 1},
        {project_id: 3, resource_id: 4},
      ]);
    });
};

