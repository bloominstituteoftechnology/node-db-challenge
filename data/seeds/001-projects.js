
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: "projectOne", description: "the first project" },
        { name: "projectTwo", description: "the second project" },
        { name: "projectThree", description: "the third project" },        
      ]);
    });
};
