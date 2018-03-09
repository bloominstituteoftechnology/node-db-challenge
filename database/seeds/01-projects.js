
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'clean room', description: 'add description here', completed: false},
        {id: 2, name: 'organize files on computer', description: 'add description here', completed: false},
        {id: 3, name: 'cook dinner', description: 'add description here', completed: false}
      ]);
    });
};
