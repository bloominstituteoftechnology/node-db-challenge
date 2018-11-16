
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {description: 'Do MVP', notes: 'Make Trello board', completed: 0, project_id: 1},
        {description: 'Do STRETCH', notes: 'Make ANKI cards', completed: 0, project_id: 2},
        {description: 'Do NOTHING', notes: 'Make flamethrower', completed: 0, project_id: 3}
      ]);
    });
};
