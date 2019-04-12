
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Build a car', description: 'The car will have four wheel and will be blue', project_id: 1, completed: 'false'},
        {name: 'Build a house', description: 'The house will have three floors and a basement', project_id: 2, completed: 'false'},
        {name: 'Build a boat', description: 'The boat will resemble a yacht with three floors', project_id: 3, completed: 'false'}
      ]);
};
