
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate() //truncate resets the ids, del() continures the counr for new Ids
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'wash car', description: "you know"},
        {name: 'clean house', description: "what to do"},
        {name: 'do homework', description: "just do it"}
      ]);
    });
};
