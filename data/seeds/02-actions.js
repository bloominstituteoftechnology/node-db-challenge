
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'install all dependencies needed', project_id: 1},
        {description: 'gather art supplies', project_id: 2},
        {description: 'watch tutorials/use the internet resources', project_id: 3}
      ]);
    });
};
