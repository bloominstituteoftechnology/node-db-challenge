
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Complete Sprint Challenge', description: 'In this challenge, you build an application that lets users track Projects and Actions.', completed: false },
        {name: 'Clean The Apartment', description: 'Clean the entire apartment with a smile.', completed: false }
      ]);
    });
};
