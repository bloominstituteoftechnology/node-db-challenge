
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Academy', desc:'', isComplete: false},
        {name: 'Speech Pedals', desc:'', isComplete: false},
        {name: 'Credentialing', desc:'', isComplete: false},
        {name: 'AirBnb', desc:'', isComplete: false},
        {name: 'Home Security', desc:'', isComplete: false},
        {name: 'Trip with Rich', desc:'', isComplete: false},
      ]);
    });
};
