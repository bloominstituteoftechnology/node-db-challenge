
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'make bed', notes: 'add action notes here', completed: false},
        {id: 2, description: 'chop vegetables', notes: 'add action notes here', completed: false},
        {id: 3, description: 'clear external harddrive', notes: 'add action notes here', completed: false},
        // {id: 4, description: 'vacuum carpet', notes: 'add action notes here', completed: false},
        // {id: 5, description: 'preheat oven', notes: 'add action notes here', completed: false}
      ]);
    });
};
