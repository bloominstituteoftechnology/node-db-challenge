
exports.seed = function(knex) {
  return knex('projects').insert([
    
        { project_name: 'Build ManCave', completed: 0},
        { project_name: 'Build Tree House', completed: 0 },
      ]);
};
