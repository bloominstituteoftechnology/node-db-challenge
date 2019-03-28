
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Project 1', project_description:'Build a house', completed:'true'},
        {project_name: 'Project 2', project_description:'Plant a tree', completed:'true'},
        {project_name: 'Project 3', project_description:'Father a son', completed:'false'}
      ]);
    });
};
