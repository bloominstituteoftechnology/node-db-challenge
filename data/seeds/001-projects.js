
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Finish Sprint', description: 'Finish all actions for MVP.', complete: 0 },
        {id: 2, name: 'Finish Stretch', description: 'Add more if there is time.', complete: 0},
        {id: 3, name: 'Spend Time with Family', description: 'Friday night movie event at school and need to plan Sat. & Sun.', complete: 0}
      ]);
    });
};
