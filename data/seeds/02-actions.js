
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Do MVP', notes: 'Make Trello board', completed: 0, project_id: 1},
        {description: 'Do MVP', notes: 'Make Trello board', completed: 0, project_id: 2},
        {description: 'Do MVP', notes: 'Make Trello board', completed: 0, project_id: 3}
      ]);
    });
};
