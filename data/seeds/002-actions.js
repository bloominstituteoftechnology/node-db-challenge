
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'Check if clothes fit.', project_id: 1},
        { description: 'Re-organize shelves.', project_id: 1},
        { description: 'Get more dog shampoo', project_id: 2}
      ]);
    });
};
