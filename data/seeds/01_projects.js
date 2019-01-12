exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Clean the house",
          project_description: "The house is dirty and needs to be cleaned.",
          project_is_complete: false
        },
        {
          name: "Complete sprint challenge",
          project_description:
            "Lambda School challenge to show mastery of RDBMSs.",
          project_is_complete: false
        },
        {
          name: "Give dog a bath",
          project_description: "The dog is dirty and needs a bath.",
          project_is_complete: false
        }
      ]);
    });
};
