
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {name: 'Clean your room!',
        notes: 'make bed, do laundry',
        complete: false },
        {name: 'complete code challanges',
        notes: 'html, css, js',
        complete: true },
      ]);
    });
};
