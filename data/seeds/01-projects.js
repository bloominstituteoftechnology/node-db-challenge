exports.seed = function(knex) {
  return knex('projects').insert([
    { project_name: 'Bird House', completed: 0 },
    { project_name: 'Doll House', completed: 0 }
  ]);
};
