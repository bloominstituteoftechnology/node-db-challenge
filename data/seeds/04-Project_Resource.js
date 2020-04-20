exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_resource")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project_resource").insert([
        { projectId: 1, resourceId: 1 },
        { projectId: 1, resourceId: 2 },
        { projectId: 2, resourceId: 3 },
        { projectId: 2, resourceId: 4 },
        { projectId: 2, resourceId: 5 }
      ]);
    });
};