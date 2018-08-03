
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, action: 'Going to fly', note: 'Live', action_complete: true},
        {id: 2, action: 'Going to lift', note: 'Smile', action_complete: false},
        {id: 3, action: 'Going to ride', note: 'Yell', action_complete: false}
      ]);
    });
};
