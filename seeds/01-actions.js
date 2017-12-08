
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_action: 'contact cowoker', description: 'rowValue1', completed: false},
        {project_action: 'buy food', description: 'rowValue2', completed: false},
        {project_action: 'grab toolbox', description: 'rowValue3', completed: false},
        {project_action: 'research toys', description: 'rowValue1', completed: false},
        {project_action: 'fix kitchen', description: 'rowValue2', completed: false},
        {project_action: 'buy tires', description: 'rowValue3', completed: false}
      ]);
    });
};
