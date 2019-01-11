
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Gutters', description: 'Clean them gutters out homie', completed: false},
        {id: 2, name: 'Clean Car', description: 'Clean inside and out of your Toyota', completed: false},
       
      ]);
    });
};
