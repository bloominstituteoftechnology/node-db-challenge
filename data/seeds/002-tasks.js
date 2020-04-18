
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description:" the first task for the first project", notes:"notes while not required are helpful", project_id: 1},
        { description:" the first task for the second project", notes:"notes while not required are helpful", project_id: 2},
        { description:" the first task for the third project", notes:"notes while not required are helpful", project_id: 3}
      ]);
    });
};
