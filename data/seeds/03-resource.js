exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resource")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resource").insert([
        { name: "Computer" },
        { name: "Internet" },
        { name: "Private work room" },
        { name: "UX Designer" },
        { name: "Database Manager" },
        { name: "Photoshop" },
      ]);
    });
};
