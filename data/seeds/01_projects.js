
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Design', description: "Design a website"},
        {id: 2, name: 'Technology', description: "Write API endpoints"},
        {id: 3, name: 'Music', description: "Record a song"}
      ]);
    });
};
