
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          "name": "Build Server",
          "Project_ID": 1,
          "description": "Complete all necessary steps",
          "additional_information": "none",
          "completed": false

        }
      ]);
    });
};
