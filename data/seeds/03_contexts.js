exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("contexts")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("contexts").insert([
        {
          context: "Home",
          context_description: "Can only be done at home.",
          actionId: "1"
        },
        {
          context: "Work",
          context_description: "Can only be done at home.",
          actionId: "3"
        },
        {
          context: "Computer",
          context_description: "Can only be done at home.",
          actionId: "5"
        }
      ]);
    });
};
