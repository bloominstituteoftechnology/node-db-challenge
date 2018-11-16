exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Do the dishes",
          description:
            "Scented candles won't eliminate the source of the smell."
        }
      ]);
    });
};
