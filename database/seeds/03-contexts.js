
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {projectId: 3, context: 'computer'},
        {projectId: 2, context: 'on site'},
        {projectId: 1, context: 'at stationary'},
        {projectId: 1, context: 'Home'},
        {projectId: 1, context: 'Office'}
      ]);
    });
};
