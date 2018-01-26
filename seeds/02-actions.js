
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'description1', notes: 'notes1', complete: true},
        {id: 2, description: 'description2', notes: 'notes2', complete: false},
        {id: 3, description: 'description3', notes: 'notes3', complete: false}
      ]);
    });
};
