
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Finish Sprint', details: 'Finish all actions for MVP.', finished: 0 },
        {id: 2, name: 'Finish Stretch', details: 'Add more if there is time.', finished: 0},
        {id: 3, name: 'Spend Time with Family', details: 'Friday night movie event at school and need to plan Sat. & Sun.', finished: 0}
      ]);
    });
};
