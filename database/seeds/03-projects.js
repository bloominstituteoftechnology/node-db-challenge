
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Shelf Installation', description: 'Install shelves above freezer in garage', completed: true,},
        {id: 2, name: 'Jet Tub', description: 'Connect proper pipes and connections for the jet tub in bathroom', completed: false,},
        {id: 3, name: 'Build TV stand', description: 'Get supplies and build the entertainment system for the bedroom', completed: false,}
      ]);
    });
};
