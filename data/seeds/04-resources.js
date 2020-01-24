exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          name: "computer",
          description: "preferably a new mac"
        },
        {
          id: 2,
          name: "internet",
          description: "the faster the better"
        },
        {
          id: 3,
          name: "camping gear",
          description: "should be lightweight"
        },
        {
          id: 4,
          name: "money",
          description: "can always use more of this"
        }
      ]);
    });
};
