exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          projects_id: 1,
          resource_name: "Computer",
          description: "New to research"
        },
        {
          projects_id: 2,
          resource_name: "internet",
          description: "research new languages onlone"
        }
      ]);
    });
};
