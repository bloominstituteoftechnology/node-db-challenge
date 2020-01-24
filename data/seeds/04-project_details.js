exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_details")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project_details").insert([
        {
          prjDet_project_id: 1,
          prjDet_resource_id: 1
        },
        {
          prjDet_project_id: 1,
          prjDet_resource_id: 2
        },
        {
          prjDet_project_id: 2,
          prjDet_resource_id: 1
        },
        {
          prjDet_project_id: 2,
          prjDet_resource_id: 2
        },
        {
          prjDet_project_id: 3,
          prjDet_resource_id: 1
        },
        {
          prjDet_project_id: 3,
          prjDet_resource_id: 3
        },
        {
          prjDet_project_id: 3,
          prjDet_resource_id: 4
        }
      ]);
    });
};
