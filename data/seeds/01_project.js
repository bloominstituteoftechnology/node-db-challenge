exports.seed = function (knex, Promise) {
  return knex("project")
    .truncate()
    .then(function () {
      return knex("project").insert([
        { name: "Sprint" },
        { name: "Building Project" },
      ]);
    });
};
