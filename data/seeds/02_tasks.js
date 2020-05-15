exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        { name: "fried eggs" },
        { name: "crispy bacon" },
      ]);
    });
};
