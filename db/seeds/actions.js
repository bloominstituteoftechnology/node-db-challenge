
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {step: "Create a UI representation", extra_notes: "Try to get to pixel perfect", project_id: 4},
        {step: "Add a search functionality", extra_notes: "Add search favicon", project_id: 4},
        {step: "Set up dependencies", extra_notes: "Add knex, sqlite3, and express", project_id: 5}
      ]);
    });
};
