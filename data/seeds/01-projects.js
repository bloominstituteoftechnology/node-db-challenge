
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name:"Death Star" },
        { name:"Installation 04" },
        { name:"TARDIS" }
      ]);
    });
};
