
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {todo_description: 'study js', notes: 'Start studying JS methods more', is_completed: false},
        {todo_description: 'Cook dinner', notes: 'Cook dinner without setting off smoke alarm and ruining it', is_completed: true},
        {todo_description: 'Work on RDBMS Sprint challenge for class', notes: 'Finish building the database and writing the routes', is_completed: false}
      ]);
    });
};
