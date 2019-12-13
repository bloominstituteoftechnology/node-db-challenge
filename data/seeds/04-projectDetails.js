
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projectDetails').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectDetails').insert([
        { projectID: 1, resourceID: 1},
        { projectID: 1, resourceID: 2},
        { projectID: 2, resourceID: 3},
        { projectID: 2, resourceID: 4},
        { projectID: 3, resourceID: 5},
        { projectID: 3, resourceID: 6}
      ]);
    });
};
