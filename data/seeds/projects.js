
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, description: 'Primitives, s-exprs', name: 'Write Lisp'},
        {id: 2, description: 'Summarize incompleteness theorem', name: 'Read GEB'},
        {id: 3, description: 'Study some code from the kernel', name: 'Study Linux'}
      ]);
    });
};
