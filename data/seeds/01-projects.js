exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "foobar project",
          description: "this is a foo bar lets make it"
        },
        { name: "number 2 the larch", description: "the larch!" },
        { name: "number 3 the larch", description: "the larch!" }
      ]);
    });
};
