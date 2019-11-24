exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "Computer",
          description: "need to research"
        },
        {
          resource_name: "internet",
          description: "research new languages onlone"
        }
      ]);
    });
};
