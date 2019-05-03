exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    // .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "make a gameboy",
          description: "going to make a gameboy"
        },

        { name: "spring challenge", description: "finsih mvp" },

        { name: "make a burger", description: "making a burger at home" }
      ]);
    });
};
