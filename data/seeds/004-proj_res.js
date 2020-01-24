
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('proj_res').del()
    .then(function () {
      // Inserts seed entries
      return knex('proj_res').insert([
        {projects_id: 1, resources_id: 1},
        {projects_id: 1, resources_id: 2},
        {projects_id: 1, resources_id: 3},
        {projects_id: 2, resources_id: 1},
        {projects_id: 2, resources_id: 2},
        {projects_id: 3, resources_id: 3},
         {projects_id: 3, resources_id: 4},
        {projects_id: 3, resources_id: 4},
         {projects_id: 3, resources_id: 5},
        {projects_id: 3, resources_id: 6},
      ]);
    });
};
