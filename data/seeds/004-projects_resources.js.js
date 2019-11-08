
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_resources').insert([
    {
      project_id: 1,
      resource_id: 1
    },
    {
      project_id: 2,
      resource_id: 2
    }, {
      project_id: 3,
      resource_id: 3
    }, {
      project_id: 4,
      resource_id: 4
    }, {
      project_id: 5,
      resource_id: 5
    }, {
      project_id: 6,
      resource_id: 6
    }, {
      project_id: 7,
      resource_id: 7
    }
  ])
};
