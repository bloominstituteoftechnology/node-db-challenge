exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          name: "Buy dish soap",
          description:
            "The asthmatic weeze of the empty bottle and the resulting pathetic bubble won't clean anything."
        },
        {
          project_id: 1,
          name: "Locate bottom of sink",
          description:
            "Fairly certain this sink has a bottom, though it has not been seen in months."
        }
      ]);
    });
};
