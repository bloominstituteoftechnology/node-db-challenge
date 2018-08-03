
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'projectValue1', description: 'Hello', completed: true},
        {id: 2, name: 'projectValue2', description: 'Hi', completed: false},
        {id: 3, name: 'projectValue3', description: 'Whats up?', completed: false}
      ]);
    });
};
