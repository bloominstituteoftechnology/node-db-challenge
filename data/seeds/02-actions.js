
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
      {description: "testing phase 1",
      notes: "Assigned to team excelsior",
      completed: 0,
      project_id: 1},
      {description: "development phase 2",
      notes: "Assigned to team laborday",
      completed: 1,
      project_id: 4},
      {description: "launching phase 3",
      notes: "Assigned to team doobee",
      completed: 1,
      project_id: 2},
      {description: "testing phase 10",
      notes: "Assigned to team excelsior",
      completed: 0,
      project_id: 1},
      {description: "development phase 4",
      notes: "Assigned to team laborday",
      completed: 1,
      project_id: 4},
      {description: "launching phase 9",
      notes: "Assigned to team doobee",
      completed: 1,
      project_id: 2},
      ]);
    });
};
