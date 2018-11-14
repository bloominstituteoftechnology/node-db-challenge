
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 11, description: 'Update Computer', notes: 'Update to version 29.90.0', completed: true},
        {project_id: 12, description: 'Throw old computer', notes: 'Give to GoodWill', completed: false},
        {project_id: 13, description: 'Install Knex globally', notes: 'npm i -g knex', completed: false}
      ]);
    });
};
