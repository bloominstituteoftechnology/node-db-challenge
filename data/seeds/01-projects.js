
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {completed: false, description: 'get it ASAP!', name: 'buy house'},
        {completed: false, description: 'dog is sick :(', name: 'take care of dog'},
        {completed: false, description: 'to pay for the house', name: 'get job'}
      ]);
    });
};
