
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('table_name').insert([
        {name: 'Clean your room!',
        description: 'make bed, do laundry',
        complete?: false },
        {name: 'complete code challanges',
        description: 'html, css, js',
        complete?: true },
      ]);
    });
};
