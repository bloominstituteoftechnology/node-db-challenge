exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "computer",
          resource_description: "preferably a new mac"
        },
        {
          id: 2,
          resource_name: "internet",
          resource_description: "the faster the better"
        },
        {
          id: 3,
          resource_name: "camping gear",
          resource_description: "should be lightweight"
        },
        {
          id: 4,
          resource_name: "money",
          resource_description: "can always use more of this"
        }
      ]);
    });
};
