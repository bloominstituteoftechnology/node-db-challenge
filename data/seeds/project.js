exports.seed = function(knex, Promise) {
  return knex('project').truncate()
    .then(function() {
      return knex('project').insert([
        {name:'React', description:'todo', completed: 0},
        {name:'Redux', description:'todo', completed: 0},
        {name:'Relax', description:'take a nap', completed: 0}
      ]);
    });
};