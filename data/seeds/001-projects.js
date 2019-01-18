exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Amazing Project', description: "An amazing project", completed: false},
        {name: 'Cool Project', description: "The coolest project", completed: false},
        {name: 'Sweet Project', description: "Sweet project like a cookie", completed: false}
      ]);
    });
};
