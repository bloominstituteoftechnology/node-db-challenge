
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {name: 'Pramp it', description:'Practice Interview'},
        {name: 'Sprinting', description:'Complete the sprint'},
      ]);
    });
};
