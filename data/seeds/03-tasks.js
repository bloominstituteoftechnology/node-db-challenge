
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description:"Create plans to Death Star", projectID:1 },
        { description:"Go to the Ark (Installation 00)", projectID:2 },
        { description:"Steal a TARDIS", projectID:3 }
      ]);
    });
};
