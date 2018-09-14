
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {project_id: 1, description: 'study 1', notes:'Stuff, More Stuff'},
        {project_id: 2, description: 'code 2', notes:'Stuff, More Stuff'},
        {project_id: 3, description: 'deploy 3', notes:'Stuff, More Stuff'},
      ]);
    });
};
