
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: '01 action description', notes: '01 notes', completedAction: false},
        {description: '02 action description', notes: '02 notes', completedAction: true},
        {description: '03 action description', notes: '03 notes', completedAction: false},
        {description: '04 action description', notes: '04 notes', completedAction: true},
      ]);
    });
};
