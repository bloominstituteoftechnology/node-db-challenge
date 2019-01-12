
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Build Computer', description: 'order parts', completed: false},
        {id: 2, name: 'Clean', description: 'do it fast', completed: false},
       
      ]);
    });

};
