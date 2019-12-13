
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name:"Stormtroopers" },
        { name:"Star Destroyers" },
        { name:"Sentinels" },
        { name:"Monitor" },
        { name:"Timelord" },
        { name:"Sonic Screwdriver" }
      ]);
    });
};
