
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'actionOne', notes: 'some noteres', completed: false, project_id: 1},
        {description: 'actionTwo', notes: 'segme notes', completed: false, project_id: 1},
        {description: 'actionThree', notes: 'somgte tnotes', completed: false, project_id: 1}
      ]);
    });
};
