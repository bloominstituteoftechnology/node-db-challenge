exports.seed = function(knex, Promise) {
  return knex('action').truncate()
    .then(function() {
      return knex('action').insert([
        {description:'React ToDo', notes:'make a todo in react', completed:0},
        {description:'Redux ToDo', notes:'make a todo in redux', completed:0},
        {description:'Relax', notes:'walk away from the computer', completed:0}
      ]);
    });
};