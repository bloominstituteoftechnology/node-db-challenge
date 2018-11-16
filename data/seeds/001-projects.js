exports.seed = function(knex, Promise) {
  return knex("projects").then(function() {
    return knex("projects").insert([
      {
        name: "Project #999",
        description:
          "I don't think I'm gonna run this seeds file because I already have data I want to persist, but maybe if I remove the initial .del function I can avoid that.",
        completed: true
      },
      {
        name: "Project #1000",
        description:
          "Kinda nervous to run this seed file but we'll see what happens.",
        completed: false
      }
    ]);
  });
};
