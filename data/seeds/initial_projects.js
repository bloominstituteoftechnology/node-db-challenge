
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: 'The Big Bang', description: 'Beginning of the universe experiment.', complete: true },
        { name: 'Dispersion of Energy', description: 'Gradual dispersion of energy, allowing for complex systems to form for a time.', complete: true  },
        { name: 'Heat Death', description: 'End of the universe experiment.', complete: false  }
      ]);
    });
};
