exports.seed = function(knex, Promise) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          name: "complete sprint",
          description: "you got this",
          completed: "true"
        }, //id=1
        {
          name: "perform one-on-one",
          description: "talk with Jeff about how awesome your code is",
          completed: "false"
        }, //2
        {
          name: "enjoy Thanksgiving break",
          description: "actually do a lot of things instead of relaxing",
          completed: "false"
        } //3
      ]);
    });
};
