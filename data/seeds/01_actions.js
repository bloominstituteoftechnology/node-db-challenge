
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {todo_description: 'eat food', notes: 'it is hard to get good quality vegetables in Montana in the winter', is_completed: false},
        {todo_description: 'drink coffee', notes: 'probably drink too much of this', is_completed: true},
        {todo_description: 'write code', notes: 'there could always be more time in the day to code', is_completed: true},
      ]);
    });
};
