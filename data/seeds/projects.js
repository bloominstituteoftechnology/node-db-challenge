exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Split the bill application",
          description:
            "Create an application that allows users to split the bill when going out."
        }
      ]);
    });
};
