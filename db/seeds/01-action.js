
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {project_id: 1, description: 'Action description 1', notes:'Note1 note2 note3'},
        {project_id: 2, description: 'Action description 2', notes:'Note1 note2 note3'},
        {project_id: 3, description: 'Action description 3', notes:'Note1 note2 note3'},
      ]);
    });
};