
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      let index = 1;
      
      return knex('action').insert([
        {id: index++, name: 'action1', description: 'description1', note: 'note1', isCompleted: false, project_id: 1},
        {id: index++, name: 'action2', description: 'description2', note: 'note2', isCompleted: false, project_id: 2},
        {id: index++, name: 'action3', description: 'description3', note: 'note3', isCompleted: false, project_id: 3}
      ]);
    });
};
