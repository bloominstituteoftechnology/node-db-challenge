
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'Do the hokie pokie', notes: 'Make sure to dose-sy-doe? What?', completed: false},
        {id: 2, description: 'Whip and Nae Nae', notes: 'My hair back and forth', completed: false},
        {id: 3, description: 'What is the meaning to life?', notes: '42', completed: false},
      ]);
    });
};
