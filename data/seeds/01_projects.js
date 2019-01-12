
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Data Analysis', description: "Qualitative Theme Surfacing", completed: false},
        {name: 'Eductional Content', description: "Create helpful education content", completed: false},
        {name: 'Landing Page', description: "Gauge interest via landing page", completed: false}
      ]);
    });
};
